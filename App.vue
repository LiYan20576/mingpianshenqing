<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			email: '',
			isLoged: false,
			groupId:'',
			unionID:''
		}
		
	}
</script>

<style >
	/*每个页面公共css */
	@import url('@/common/css/common.css');
	@import url('@/common/css/main.css');
	@import url('@/common/css/index.css');
	
</style>
