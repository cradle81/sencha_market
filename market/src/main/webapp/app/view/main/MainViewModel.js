Ext.define('Study.view.main.MainViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.main',
	stores : {
		menuList : {
				root : {
					expanded : true,
					children : [{
						text : '상품관리',
						iconCls:'x-fa fa-gift',
						expended : true,
						selectable : false,
						children : [{
							text : '상품목록',
							leaf : true,
							page : 'productList'
						}] 
						
					},{
						text : '주문관리',
						iconCls:'x-fa fa-shopping-cart',
						extended : true,
						selectable : false,
						children : [{
							text: '주문목록',
							leaf : true,
							page : 'orderList'
						}]
					},{
						text : '회원관리',
						extended : true,
						iconCls:'x-fa fa-users',
						selectable : false,
						children : [{
							text : '회원목록',
							leaf : true,
							page : 'memberList'
						}]
							
					}]
				}
		}
	}
	
});