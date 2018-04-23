Ext.define('Study.view.order.OrderListViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.orderList',
	stores : {
		orderList : {
			field : ['productNm','price','amount','rgstDt'],
			data : [{
				productNm : '지우개',
				price : 500,
				amount : 101,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 102,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 103,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 104,
				rgstDt : new Date()
			},{
				productNm : '지우개',
				price : 500,
				amount : 105,
				rgstDt : new Date()
			}]
		}
	}
	
});