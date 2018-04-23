Ext.define('Study.view.product.ProductListViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.productlist',
	stores : {
		productList : {
			field : ['productNm','price','amount','rgstDt'],
			data : [{
				productNm : '지우개',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			}]
		}
	}
});