// 界面 - 服务
export default {
	/**
	 * 有底部安全区域
	 */
	safeAreaBottom() {
		var array = [
		        'iPhone X', 'iPhone10,3 / iPhone10,6',
		        'iPhone XR', 'iPhone11,8',
		        'iPhone XS', 'iPhone11,2',
		        'iPhone XS Max', 'iPhone11,6 / iPhone11,4',
		        'iPhone 11', 'iPhone12,1',
		        'iPhone 11 Pro', 'iPhone12,3',
		        'iPhone 11 Pro Max', 'iPhone12,5',
		        'iPhone 12 mini', 'iPhone13,1',
		        'iPhone 12', 'iPhone13,2',
		        'iPhone 12 Pro', 'iPhone13,3',
		        'iPhone 12 Pro Max', 'iPhone13,4',
		        'iPhone 13 mini', 'iPhone14,1',
		        'iPhone 13', 'iPhone14,2',
		        'iPhone 13 Pro', 'iPhone14,3',
		        'iPhone 13 Pro Max', 'iPhone14,4',
		        'iPhone 14', 'iPhone15,1', // 添加 iPhone 14
		        'iPhone 14 Pro', 'iPhone15,2', // 添加 iPhone 14 Pro
		        'iPhone 14 Pro Max', 'iPhone15,3', // 添加 iPhone 14 Pro Max
		        'iPhone 14 Plus', 'iPhone15,4', // 添加 iPhone 14 Mini
		        'iPhone 15', 'iPhone16,1', // 添加 iPhone 15
		        'iPhone 15 Pro', 'iPhone16,2', // 添加 iPhone 15 Pro
		        'iPhone 15 Pro Max', 'iPhone16,3', // 添加 iPhone 15 Pro Max
		        'iPhone 15 Plus', 'iPhone16,4' // 添加 iPhone 15 Mini
		    ];
		const model = uni.getSystemInfoSync().model.toLowerCase().replace(/\s+/g, "");
		const findIndex = array.findIndex(item => model.indexOf(item.toLowerCase().replace(/\s+/g, "")) != -1);
		return findIndex != -1;
	}
}