Ext.define('Study.view.member.MemberViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.memberList',
	
	stores : {
		memberList : {
			field : ['productNm','price','amount','rgstDt'],
			data : [{
				productNm : '지우개1',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개1',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개2',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개2',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			},{
				productNm : '지우개3',
				price : 500,
				amount : 100,
				rgstDt : new Date()
			}]
		}
	}
	
});