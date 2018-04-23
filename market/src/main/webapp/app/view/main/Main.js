/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
/*Ext.define('Study.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    width:500,
    height:500,
    items:[{
    	xtype :"button",
    	text: "Click",
    	handler:function(bnt){
    		Ext.Ajax.request({
    		
    			url:"/getList",
    			success: function(res)
    			{
    				var api = Ext.decode(res.responseText);
    				console.log("ret",api);
    			}
    		});
    	}
    }]
   
});
 */

/*Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout : 'border',

    items : [{
    	xtype: 'panel',
    	region: 'north',
    	title: '타이틀 영역'
    	
    },{
    	xtype: 'panel',
    	region : 'west',
    	width : 200,
    	layout: 'fit',
    	items: {
    		xtype: 'treelist',
    		store: {
    			root:{
    				expended :true,
    				children:[{
    					text: '메뉴1',
    					leaf: true
    				},{
    					text: '메뉴2',
    					leaf: true
    				},{
    					text: '메뉴3',
    					leaf: true
    				},{
    					text: '메뉴4',
    					leaf: true
    				}]
    			}
    		}
    	}
    	
    },{
    	xtyep : 'panel',
    	region: 'center',
    	flex: 1    	
    }] 
});
*/
Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    controller: 'main',
    viewModel : 'main', 
    layout: 'border',
    items : [{
    	xtype : 'panel',
    	region : 'north',
//    	title: 'Market Aadmin'
    	title : '',
    	header : false,
    	items : [{
    		xtype : 'toolbar',
    		items : [{
    			xtype : 'label',
    			html : '<h2>Market Admin</h2>'
    		},'->',{
    			xtype : 'button',
    			text : 'xxx 님',
    			menu : [{
    				text: '비밀번호변경',
    				handler:'updatePasswordBtn'
    				
    			},{
    				text: '로그아웃',
    				handler: 'loginBtn'
    					
    				
    			}]
    			
    		}]
    	}]
    },{
    	xtype : 'panel',
    	split : true,
    	region : 'west',
    	width : 200,
    	items: [{
    		xtype : 'treelist',
    		listeners : {
    			selectionchange : 'menuChange'
    			
    		},
    		bind : {
    			store : {
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
    	}]
    },{
    	xtype : 'panel',
    	border: true,
    	flex : 1,
    	region : 'center',
    	layout : 'fit',
    	items : {
    		xtype : 'panel',
    		html : "<h2>Main DashBoard</h2>"
    	}
    	
    }]

 
});