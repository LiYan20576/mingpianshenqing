import App from './App'

import Vue from 'vue'
import './uni.promisify.adaptor'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// Vue.use(mavonEditor)


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

Vue.mixin({
	methods: {
		setTabBarIndex(index) {
			if (typeof this.$mp.page.getTabBar === 'function' &&
				this.$mp.page.getTabBar()) {
				this.$mp.page.getTabBar().setData({
					selected: index
				})
			}
		},
		setTabBarRed() {
			if (typeof this.$mp.page.getTabBar === 'function' &&
				this.$mp.page.getTabBar()) {
				this.$mp.page.getTabBar().setData({
					'list[0].show': false
				})
			}
		},
	}
})