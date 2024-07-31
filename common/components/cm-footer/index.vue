<template>
	<!-- <view> -->
		<footer class="footer">
			<div class="footer-secend footer-nav-wrapper">
				<div class="footer-left">
					<span>
						UESG｜通用ESG标准认证与公示机构
					</span>
				</div>
				<div class="footer-right">
					<a href="" id="toggleTheme">
						深色模式
					</a>
					<a href="">
						简体中文
					</a>

				</div>
			</div>
			<div class="pc">
				<div class="footer-bottom  footer-nav-wrapper">
					<div class="footer-left">
						<ul class="footer-items">
							<li>
								<a href="/" class="footer-item">关于UESG</a>
							</li>
							<li>
								<a href="/news.html" class="footer-item">新闻中心</a>
							</li>
							<li>
								<a href="/support.html" class="footer-item">常见问题</a>
							</li>
							<li>
								<a href="/privacy.html" class="footer-item">隐私和法律</a>
							</li>
							<!-- <li>
		            <a href="/" class="footer-item">营业执照</a>
		          </li> -->
							<li>
								<a href="https://beian.miit.gov.cn/" class="footer-item"
									target="_blank">沪ICP备2023039599</a>
							</li>
							<li>
								<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502006921"
									class="footer-item" target="_blank">
									沪公网安备31010502006921号
								</a>
							</li>
						</ul>
					</div>
					<div class="footer-right">
						<span>
							Copyright © 2024 UESG
						</span>
					</div>
				</div>
			</div>

			<div class="mb">
				<div class="footer-bottom footer-nav-wrapper">
					<div class="footer-top">
						Copyright © 2024 UESG
					</div>
					<div class="footer-bottom">
						<ul class="footer-items">
							<li>
								<a href="/" class="footer-item">关于UESG</a>
							</li>

							<li>
								<a href="/news.html" class="footer-item">新闻中心</a>
							</li>

							<li>
								<a href="/support.html" class="footer-item">常见问题</a>
							</li>

							<li>
								<a href="/privacy.html" class="footer-item">隐私和法律</a>
							</li>

						</ul>
					</div>

				</div>
			</div>

		</footer>
	<!-- </view> -->
</template>

<script>
	export default {
		// onLoad() {
		// 	// 定义媒体查询
		// 	const mediaQuery = uni.createMediaQuery('(prefers-color-scheme: dark)')

		// 	// 定义响应媒体查询变化的函数
		// 	function handleThemeChange(e) {
		// 		if (e.matches) {
		// 			console.log('系统切换到暗黑模式')
		// 			// 在这里添加暗黑模式下的处理逻辑
		// 			uni.setStorageSync('mode', 'dark')
		// 			uni.setNavigationBarColor({
		// 				frontColor: '#ffffff',
		// 				backgroundColor: '#000000' // 修改导航栏颜色为黑色
		// 			})
		// 		} else {
		// 			console.log('系统切换到明亮模式')
		// 			// 在这里添加明亮模式下的处理逻辑
		// 			uni.setStorageSync('mode', 'light')
		// 			uni.setNavigationBarColor({
		// 				frontColor: '#000000',
		// 				backgroundColor: '#ffffff' // 修改导航栏颜色为白色
		// 			})
		// 		}
		// 	}

		// 	// 初始检查
		// 	handleThemeChange(mediaQuery)

		// 	// 监听媒体查询状态变化
		// 	mediaQuery.onChange(handleThemeChange)
		// }
	};
</script>

<style lang="scss">
	.pc {
		display: block;
	}

	.mb {
		display: none;
	}

	@media screen and (max-width:960px) {
		.pc {
			display: none !important;
		}

		.mb {
			display: block !important;
		}

		.mb .footer-bottom {
			align-items: flex-start;
		}

		.mb .footer-nav-wrapper .footer-items {
			display: flex;
			align-items: center;
			justify-content: flex-start;

		}

		.mb .footer-nav-wrapper .footer-items .footer-item {
			font-size: 12px;
			color: var(--link-color);
			line-height: 20px;
			position: relative;
		}

		.mb .footer-nav-wrapper .footer-items li {
			display: flex;
			align-items: center;
		}

		.mb .footer-nav-wrapper .footer-items li::after {
			content: '';
			display: inline-block;
			width: 1px;
			height: 8px;
			background-color: var(--link-color);
			margin: 0 10px;
		}

		.mb .footer-nav-wrapper .footer-items li:last-child:after {
			display: none;
		}

		.mb .footer-nav-wrapper .footer-items .gapLine {
			margin: 0 10px;
			font-size: 12px;
			color: var(--link-color);
			line-height: 20px;
		}

		.mb .footer-nav-wrapper .footer-top {
			margin-bottom: 5px;
			font-size: 12px;
			color: var(--link-color);
			line-height: 20px;
		}

	}
</style>