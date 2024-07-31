Component({
	data: {
		selected: 0,
		color: "#7A7E83",
		selectedColor: "#3cc51f",
		list: [{
				"pagePath": "/pages/tabBar/home/home",
				"text": "机构介绍",
				"show": true
			},
			{
				"pagePath": "/pages/tabBar/my/my",
				"text": "我的名片",
				"show": false
			}
		],
		safeAreaBottom: false
	},
	ready() {
		var array = ['iPhone X', 'iPhone10,3 / iPhone10,6',
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
			'iPhone 14 mini', 'iPhone15,1',
			'iPhone 14', 'iPhone15,2',
			'iPhone 14 Pro', 'iPhone15,3',
			'iPhone 14 Pro Max', 'iPhone15,4'
		];
		const model = wx.getSystemInfoSync().model.toLowerCase().replace(/\s+/g, "");
		const findIndex = array.findIndex(item => model.indexOf(item.toLowerCase().replace(/\s+/g, "")) != -1);
		this.setData({
			safeAreaBottom: findIndex != -1
		})
		var App = getApp();
		
	},
	moved() {
		console.log(this.data.selected);
		if (this.data.selected == 1) {
			this.setData({
				'list[0].show': false
			});
		}

	},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			this.setData({
				'list[0].show': false
			});
			wx.switchTab({
				url: data.url
			})
			this.setData({
				selected: data.index
			})

		}


	}

})