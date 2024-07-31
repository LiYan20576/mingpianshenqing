<template>
	<view class="">
		
	</view>

</template>

<script>
	const App = getApp();

	export default {
		data() {
			return {
				baseUrl: '',
				unionID: '',
				baseUrl: 'https://www.scdpf.xyz',
				formData: {
					realname: "",
					pinyin: "",
					tel_num: "",
					email: "",
					title: ""
				},
				show: false,
				ready: false,
				tips: ''
			}
		},

		onLoad(query) {
			const that = this;
			this.wxlogin();
			
		},
		methods: {
			wxlogin(){
				// 公众号的AppId
				const AppId = 'wx083b360d728b86d5'; 
				// 获取当前的页面路径，想授权通过后跳转到什么地方就写那url，(只能是当前域名下的路径) hash路径记得转码
				const local = encodeURIComponent("https://www.uesg.cn/h5/#/pages/apply/apply");
				// const local = "https://www.uesg.cn/h5/#/pages/apply/apply";
				// 跳转登入授权验证
				const href = 
					`https://open.weixin.qq.com/connect/oauth2/authorize?
					appid=${AppId}&
					redirect_uri=${local}&
					response_type=code&
					scope=snsapi_userinfo&
					state=${AppId}#wechat_redirect`
				window.location.href = href
			},
		}
	}
</script>

<style lang="scss">
	
</style>