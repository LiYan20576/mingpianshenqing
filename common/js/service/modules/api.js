// api.js

async function update_info(params) {
	try {
		const response = await uni.request({
			url: apiUrl + '/account/update_info',
			method: 'POST',
			data: params
		});

		// 处理响应数据
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}


async function translate(params) {
	try {
		const response = await uni.request({
			url: 'https://dev.uesg.cn/translate/translate',
			method: 'POST',
			data: params
		});
		console.log(response,'apiiiiiiiiii')
		// 处理响应数据
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
export default {
	update_info,
	translate
};
