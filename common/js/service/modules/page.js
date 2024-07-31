// 页面 - 服务
export default {
	/**
	 * 上一页面
	 * 
	 * @param detal 返回的页面
	 */
	prePage(detal = 1) {
		const pages = getCurrentPages();
		const page = pages[pages.length - 1 - detal];
		return page.$vm;
	},

	/**
	 * 将页面滚动到目标位置。
	 * 
	 * @param scrollTop 滚动到页面的目标位置（单位px）
	 * @param duration 滚动动画的时长，默认300ms，单位 ms
	 */
	pageScrollTo(scrollTop = 0, duration = 300) {
		return new Promise((resolve, reject) => {
			uni.pageScrollTo({
				scrollTop: scrollTop,
				duration: duration,
				success: res => {
					resolve(res);
				},
				fail: error => {
					reject(error);
				}
			})
		})
	}
}
