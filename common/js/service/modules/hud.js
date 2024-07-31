import router from './router.js';
import user from "./user.js";
// 界面 - 服务
export default {

	/**
	 * 验证
	 * 
	 * @param value 值
	 * @param message 提示文字
	 */
	verify(value, message) {
		if (value == '' || value == 0 || value == undefined || value == null) {
			this.showAlert(message);
			return true;
		}
		return false;
	},

	/**
	 * 验证多个
	 * 
	 * @param values 多个值
	 * @param messages 多个提示文字
	 */
	verifys(values = [], messages = []) {
		if (values.length != messages.length) {
			this.showAlert('数据不匹配');
			return true;
		}
		for (var i = 0; i < values.length; i++) {
			if (this.verify(values[i], messages[i])) return true;
		}
		return false;
	},

	/**
	 * 验证登录
	 */
	verifyLogin() {
		if (user.userLogin() == false) {
			router.navigateTo('login');
			return true;
		}
		return false;
	},

	/**
	 * 显示消息提示框。 - 常用。
	 * 
	 * @param title 提示的内容，长度与 icon 取值有关。
	 * @param name 路由名称
	 * @param params 路由参数
	 * @param duration 提示的延迟时间，单位毫秒，默认：1500
	 */
	showAlert(title, name = '', params = {}, duration = 3000) {
		return new Promise((resolve, reject) => {
			uni.showToast({
				title: title,
				icon: 'none',
				mask: true,
				duration: duration,
				position: 'center',
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
			if (name == '') return;
			setTimeout(() => {
				if (name == 'back') {
					router.navigateBack();
				} else {
					router.navigateTo(name, params);
				}
			}, duration);
		})
	},

	/**
	 * 显示消息提示框。
	 * 
	 * @param title 提示的内容，长度与 icon 取值有关。
	 * @param options 其他参数
	 */
	showToast(title, options = {}) {
		const {
			icon, //图标，有效值详见下方说明。
			image, //自定义图标的本地路径,App、H5、微信小程序、百度小程序
			mask, //是否显示透明蒙层，防止触摸穿透，默认：false, App、微信小程序
			duration, //提示的延迟时间，单位毫秒，默认：1500,App
			position //纯文本轻提示显示位置，填写有效值后只有 title 属性生效， 有效值详见下方说明。
		} = options;
		return new Promise((resolve, reject) => {
			uni.showToast({
				title: title,
				icon: icon,
				mask: mask,
				duration: duration,
				position: position,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		})
	},

	/**
	 * 显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。
	 * 
	 * @param title 提示的内容
	 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：false,App、微信小程序、百度小程序
	 */
	showLoading(title = '加载中', mask = false) {
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: title,
				mask: mask,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		})
	},

	/**
	 * 隐藏 loading 提示框。
	 */
	hideLoading() {
		return new Promise((resolve, reject) => {
			uni.hideLoading();
			resolve();
		})
	},

	/**
	 * 显示模态弹窗，类似于标准 html 的消息框：alert、confirm。
	 * 
	 * @param title 提示的标题
	 * @param content 提示的内容
	 * @param options 其他参数
	 */
	showModal(title, content, options = {}) {
		const {
			showCancel = true, //是否显示取消按钮，默认为 true
				cancelText = '取消', //取消按钮的文字，默认为"取消"，最多 4 个字符
				cancelColor = '#000000', //取消按钮的文字颜色，默认为"#000000",H5、微信小程序、百度小程序
				confirmText = "确定", //确定按钮的文字，默认为"确定"，最多 4 个字符
				confirmColor =
				'$pt-color-main' //确定按钮的文字颜色，H5平台默认为"#007aff"，微信小程序平台默认为"#3CC51F"，百度小程序平台默认为"#3c76ff",H5、微信小程序、百度小程序
		} = options;
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				showCancel: showCancel,
				cancelText: cancelText,
				cancelColor: cancelColor,
				confirmText: confirmText,
				confirmColor: confirmColor,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		})
	},

	/**
	 * 显示操作菜单
	 * 
	 * @param itemList 按钮的文字数组.微信、百度、字节跳动小程序数组长度最大为6个
	 * @param itemColor 按钮的文字颜色，字符串格式，默认为"#000000",App-iOS、字节跳动小程序不支持
	 */
	showActionSheet(itemList = [], itemColor = "#000000") {
		return new Promise((resolve, reject) => {
			uni.showActionSheet({
				itemList: itemList,
				itemColor: itemColor,
				success: res => {
					// -1为取消，在支付宝平台
					if (res.tapIndex == -1) {
						reject(res);
					} else {
						resolve(res);
					}
				},
				fail: error => {
					reject(error);
				}
			})
		})
	}
}
