export default {
	/**
	 * 是否登录以及存入登录状态数据
	 * 
	 * @param data 数据源字典
	 */
	userLogin(data) {
		if (data == undefined) {
			if (this.userToken() == '') return false;
			return true;
		} else {
			this.userToken(data["token"]);
			return true;
		}
	},
	/**
	 * 退出
	 */
	userLogout() {
		uni.removeStorageSync('userToken');
	},
	/**
	 * 用户token
	 * 
	 * @param token 用户token 存在则存入缓存，否则读取缓存，返回用户token
	 */
	userToken(token = '') {
		if (token == '') {
			return uni.getStorageSync('userToken') || '';
		} else {
			uni.setStorageSync('userToken', token);
			return token;
		}
	},
	/**
	 * 用户邀请码
	 * 
	 * @param code 用户code 存在则存入缓存，否则读取缓存，返回用户code
	 */
	userCode(code = '') {
		if (code == '') {
			return uni.getStorageSync('userCode') || '';
		} else {
			uni.setStorageSync('userCode', code);
			return code;
		}
	},
}
