// 路由 - 服务
import router from './modules/router.js';
// 界面 - 服务
import hud from './modules/hud.js';
// 页面 - 服务
import page from './modules/page.js';
// 用户 - 服务
import user from './modules/user.js';
// 系统 - 服务
import system from './modules/system.js';
import api from './modules/api.js';

module.exports = {
	router, // 路由 - 服务
	hud, // 界面 - 服务
	page, // 页面 - 服务
	user, // 用户 - 服务
	system, // 系统 - 服务
	api
}
