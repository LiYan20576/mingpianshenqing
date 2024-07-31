// 路由 - 服务
import routes from './route.js';
import user from './user.js';
export default {

	/**
	 * 关闭所有页面，打开到应用内的某个页面。
	 * 
	 * @param name 路由名称 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
	 */
	reLaunch(name) {
		const url = this.getUrl(name);
		return new Promise((resolve, reject) => {
			uni.reLaunch({
				url: url,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		});
	},

	/**
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
	 * 
	 * @param name 路由名称 需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数
	 */
	switchTab(name) {
		const url = this.getUrl(name);
		return new Promise((resolve, reject) => {
			uni.switchTab({
				url: url,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		});
	},

	/**
	 * 关闭当前页面，跳转到应用内的某个页面。
	 * 
	 * @param name 路由名称 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
	 * @param params 参数字典
	 */
	redirectTo(name, params = {}) {
		const url = this.getUrl(name, params);
		return new Promise((resolve, reject) => {
			uni.redirectTo({
				url: url,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		});
	},

	/**
	 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
	 * 
	 * @param name 路由名称 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数
	 * @param params 参数字典
	 * @param options 可选参数
	 */
	navigateTo(name, params = {}, options = {}) {
		//需要登录
		if (this.getRoute(name).login && user.userLogin() == false) {
			this.navigateTo('login');
			return;
		}
		const url = this.getUrl(name, params);
		const {
			animationType, //窗口显示的动画效果，详见：窗口动画
			animationDuration, //窗口动画持续时间，单位为 ms
			events //页面间通信接口，用于监听被打开页面发送到当前页面的数据。
		} = options;
		return new Promise((resolve, reject) => {
			uni.navigateTo({
				url: url,
				animationType: animationType,
				animationDuration: animationDuration,
				events: events,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		});
	},

	/**
	 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
	 * 
	 * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
	 * @param timeInterval 延时跳转
	 * @param options 可选参数
	 */
	navigateBack(delta = 1, timeInterval = 0, options = {}) {
		const {
			animationType, //窗口显示的动画效果，详见：窗口动画
			animationDuration //窗口动画持续时间，单位为 ms
		} = options;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				uni.navigateBack({
					delta: delta,
					animationType: animationType,
					animationDuration: animationDuration
				})
				resolve();
			}, timeInterval);
		})
	},

	/**
	 * 拼接链接
	 * 
	 * @param name 路由名称
	 * @param params 参数字典
	 */
	getUrl(name, params = {}) {
		var url = this.getUrlForName(name);
		url += '?';
		for (const key in params) {
			url += key;
			url += '=';
			url += params[key];
			url += '&';
		}
		url = url.substring(0, url.length - 1);
		return url;
	},

	/**
	 * 路由 - 转链接
	 * 
	 * @param name 路由名称
	 */
	getUrlForName(name) {
		const route = this.getRoute(name);
		if (route) {
			return route.path;
		} else {
			console.log('页面不存在');
			return '';
		}
	},

	/**
	 * 获取路由对象
	 * 
	 * @param name 路由名称
	 */
	getRoute(name) {
		return routes.find(item => item.name == name);
	}
}
