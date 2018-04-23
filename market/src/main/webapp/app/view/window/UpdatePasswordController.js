Ext.define('Study.view.window.UpdatePasswordController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.updatepassword',
	//로그인 버튼 클릭
	loginBtn : function(btn){
		console.log("login clicked");
		btn.up("window").close();
		Ext.widget("main");
	},
	closeBtn : function(btn){
		btn.up("window").close();
	},
	changeBtn : function(btn){
		btn.up("window").close();
	}
	
});