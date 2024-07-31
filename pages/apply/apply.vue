<template>
	<view class="">
		<view class="wrapper">

			<view class="banner">
				<image src="/static/images/Logo-small.svg" mode="heightFix"></image>
			</view>
			<view class="title">
				申请企业名片
			</view>

			<view class="card">

				<!-- 中文名称 -->
				<view class="input-form" id="name">
					<view class="input-title">
						姓名
					</view>
					<view class="input-wrapper">
						<input placeholder="请输入您的全名" placeholder-class="phsy" v-model="formData.realname">
						<image v-if="validateChineseName(formData.realname)" class="icon-check"
							src="/static/images/Check.svg" mode="widthFix"></image>
					</view>
				</view>
				<!-- 英文名称 -->
				<view class="input-form" id="pinyin">
					<view class="input-title">
						英文
					</view>
					<view class="input-wrapper">
						<input placeholder="请输入您的英文名字" placeholder-class="phsy" v-model="formData.pinyin">
						<image v-if="validateEnglishName(formData.pinyin)" class="icon-check"
							src="/static/images/Check.svg" mode="widthFix"></image>
					</view>
				</view>
				<!-- 电子邮箱 -->
				<view class="input-form" id="email">
					<view class="input-title">
						邮箱
					</view>
					<view class="input-wrapper">
						<input placeholder="请输入您的邮箱" placeholder-class="phsy" v-model="formData.email">
						<image v-if="validateEmail(formData.email)" class="icon-check" src="/static/images/Check.svg"
							mode="widthFix"></image>
					</view>
				</view>

				<!-- 电话 -->
				<view class="input-form" id="tel">
					<view class="input-title">
						手机号
					</view>
					<view class="input-wrapper">
						<input placeholder="请输入您的手机号" placeholder-class="phsy" v-model="formData.tel_num">
						<image v-if="validatePhoneNumber(formData.tel_num)" class="icon-check"
							src="/static/images/Check.svg" mode="widthFix"></image>
					</view>
				</view>

				<!-- 职位 -->
				<!-- <view class="input-form" id="job">
					<view class="input-wrapper">
						<input placeholder="请输入您的职位" v-model="formData.title">
					</view>
				</view> -->

				<view class="line-gap"></view>


				<view class="submit" :class=" validateForm(formData) ? 'active' : ''" @click="submit()">提交</view>

			</view>



		</view>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" confirmText="确定" title="通知" :content="tips"></uni-popup-dialog>
		</uni-popup>
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
				tips: '',
				code: ''
			}
		},
		created() {
			const url = window.location.href
			const code = url.match(/=(\S*)&state=wx083b360d728b86d5#/)
			if (code !== null) {
				// 如果能获得code，说明需要处理url并跳转，如果不能获得code，不用处理
				const replaceUrl = 'https://' + window.location.host + '/h5/#/pages/apply/apply?code=' + code[1] + '&state=wx083b360d728b86d5'
				return location.replace(replaceUrl)
			}
		},
		onLoad(query) {
			const that = this;
			that.code = query.code;
			console.log(that.code, "凭证代码为");
			that.getUnionID();
		},
		methods: {
			getUnionID() {
				var that = this;
				uni.request({
					url: that.baseUrl + '/uesg/web/get_unionID',
					method: "POST",
					data: {
						js_code: that.code
					},
					success(res) {
						console.log("换取的 unionID 为：", res.data);
						if (res.data.code == 200) {
							that.unionID = res.data.unionID
						} else {
							uni.showToast({
								title: '错误',
								icon: "error",
								duration: 1000 //单位毫秒
							});
						}
					}
				})
			},

			// 校验中文名称（2-10个中文字符）
			validateChineseName(name) {
				const reg = /^[\u4E00-\u9FA5]{2,10}$/;
				return reg.test(name);
			},

			// 校验英文名称（2-50个英文字符，不区分大小写，可以包含空格）
			validateEnglishName(name) {
				const reg = /^[a-zA-Z ]{2,50}$/;
				return reg.test(name);
			},


			// 校验邮箱
			validateEmail(email) {
				const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return reg.test(email);
			},

			// 校验手机号（中国大陆手机号）
			validatePhoneNumber(phoneNumber) {
				const reg = /^1[3456789]\d{9}$/;
				return reg.test(phoneNumber);
			},

			validateForm(formData) {
				// 校验中文名称（2-4个中文字符）
				const validateChineseName = /^[\u4E00-\u9FA5]{2,10}$/;
				// 校验英文名称（2-50个英文字符，不区分大小写）
				const validateEnglishName = /^[a-zA-Z ]{2,50}$/;
				// 校验邮箱
				const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				// 校验手机号（中国大陆手机号）
				const validatePhoneNumber = /^1[3456789]\d{9}$/;

				// 对每个字段进行校验
				const a = validateChineseName.test(formData.realname);
				const b = validateEnglishName.test(formData.pinyin);
				const c = validateEmail.test(formData.email);
				const d = validatePhoneNumber.test(formData.tel_num);

				// 返回校验结果
				return a && b && c && d;
			},

			messageToggle(type, text) {
				this.msgType = type
				this.tips = text
				this.$refs.alertDialog.open()
			},

			submit() {
				const that = this;
				if (that.validateForm(that.formData)) {

					uni.request({
						url: that.baseUrl + "/save_card_info",
						method: "POST",
						data: {
							unionID: that.unionID,
							realname: that.formData.realname,
							pinyin: that.formData.pinyin,
							tel: that.formData.tel_num,
							email: that.formData.email,
							job: that.formData.title
						},
						success(res) {
							console.log(res.data.code);
							if (res.data.code == 200) {
								that.messageToggle('success', '信息已提交，等待审核')
							} else {
								that.messageToggle('error', '请勿重复提交')
							}
						}
					})
				} else {
					uni.showToast({
						title: '请完善信息',
						icon: "error",
						duration: 2000 //单位毫秒
					});
				}

			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		overflow: hidden;

		.phsy {
			font-size: 14px;
			line-height: 20px;
			color: rgba(94, 93, 93, 0.5);
			display: flex;
			align-items: center;
			font-family: InterVariableFont !important;
			font-weight: 500;
		}

		.banner {
			width: 100%;
			height: 48px;
			box-sizing: border-box;
			padding-left: 20px;
			background-color: #282828;
			display: flex;
			align-items: center;

			image {
				height: 24px;
				width: auto;
			}
		}

		.title {
			width: 100%;
			height: 48px;
			box-sizing: border-box;
			padding-left: 20px;
			background-color: #F7F7F7;
			display: flex;
			align-items: center;
			font-size: 16px;
			line-height: 22px;
			font-weight: 500;
			font-family: InterVariableFont !important;
			color: rgba(94, 93, 93, 1);
		}

		.card {
			width: 100%;
			box-sizing: border-box;
			padding: 20px;

			.input-form {
				margin-bottom: 20px;

				.input-title {
					margin-left: 10px;
					margin-bottom: 6px;
					font-size: 13px;
					line-height: 18px;
					font-weight: 500;
					font-family: InterVariableFont !important;
					color: rgba(94, 93, 93, 1);
				}

				.input-wrapper {
					position: relative;

					input {
						height: 42px;
						width: 100%;
						background: transparent !important;
						padding: 0 20px;
						box-sizing: border-box;
						border: 2px solid rgba(0, 0, 0, 0.1);
						border-radius: 6px;
						font-size: 16px;
						line-height: 22px;
						color: rgba(94, 93, 93, 1);
						display: flex;
						align-items: center;
					}

					input:focus-within {
						border: 2px solid #5DB539 !important;
					}

					.icon-check {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						right: 20px;
						width: 22px;
						height: auto;
					}
				}



			}

			.line-gap {
				width: 100%;
				margin: 40px auto;
				height: 1px;
				background-color: rgba(0, 0, 0, 0.1);
			}

			.submit {
				width: 100%;
				height: 42px;
				box-sizing: border-box;
				border-radius: 6px;
				border: 2px solid rgba(93, 181, 57, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				font-size: 16px;
				line-height: 22px;
				background-color: rgba(93, 181, 57, 0.25);

			}

			.active {
				background-color: rgba(93, 181, 57, 1) !important;
				border: 2px solid rgba(93, 181, 57, 1) !important;
			}
		}
	}
</style>