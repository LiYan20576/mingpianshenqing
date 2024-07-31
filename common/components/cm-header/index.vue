<template>
	<header id="main-nav">
		<nav class="nav-wrapper">
			<div class="nav-left">
				<ul class="nav-items" id="index" >
					<li class="nav-item" style="display: flex; align-items: center">
						<div style="display: flex; align-items: center" class="light">
							<img src="/static/Global-gray.svg" style="width: 59px; height: auto; margin-right: 3px"
								class="disabled" />
							<img src="/static/Global-green.svg" style="width: 59px; height: auto; margin-right: 3px"
								class="abled" />
						</div>
						<div style="display: flex; align-items: center" class="dark">
							<img src="/static/Global-black.svg" style="width: 59px; height: auto; margin-right: 3px"
								class="disabled" />
							<img src="/static/Global-green.svg" style="width: 59px; height: auto; margin-right: 3px"
								class="abled" />
						</div>

						<a href="">全球ESG案例征集</a>
					</li>
					<li class="nav-item">
						<a href="">ESG案例库</a>
					</li>
					<li class="nav-item">
						<a href="">企业ESG服务</a>
					</li>
					<li class="nav-item">
						<a href="">个人ESG服务</a>
					</li>
					<li class="nav-item">
						<a href="">发现更多</a>
					</li>
				</ul>
				<ul class="nav-items" id="news">
					<li class="nav-item">
						<a href="#" class="goBack">返回</a>
					</li>
					<li class="nav-item">
						<a href="/news.html">新闻中心</a>
					</li>
				</ul>
				<ul class="nav-items" id="support">
					<li class="nav-item">
						<a href="#" class="goBack">返回</a>
					</li>
					<li class="nav-item">
						<a href="/support.html">常见问题</a>
					</li>
				</ul>
				<ul class="nav-items" id="my">
					<li class="nav-item">
						<a href="#" class="goBack">返回</a>
					</li>
					<li class="nav-item">
						<a href="/my.html">个人中心</a>
					</li>
				</ul>
				<ul class="nav-items" id="privacy">
					<li class="nav-item">
						<a href="#" class="goBack">返回</a>
					</li>
					<li class="nav-item">
						<a href="/privacy.html">隐私和法律</a>
					</li>
				</ul>
			</div>

			<div class="nav-right">

				<button id="login" class="login">登陆</button>

				<div class="logined">
					<div class="avatar">
						<img src="/static/常见问题02.jpg" alt="" style="" />
					</div>
					<div class="userMenu">
						<ul>
							<li>
								<a href="/">个人中心</a>
							</li>
							<li>
								<a href="javascript:void(0);" id="logout">退出登录</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				relativePath:''
			};
		},
		created() {
			// this.init()
			this.relativePath = this.$route.path; // 获取当前页面的路由路径
			
		},
		methods: {
			init() {
				v
			}
		}
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