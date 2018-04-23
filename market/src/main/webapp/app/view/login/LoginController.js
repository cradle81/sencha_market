Ext.define('Study.view.login.LoginController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.login',
	//로그인 버튼 클릭
	loginBtn : function(btn){
		console.log("login clicked");
		btn.up("window").close();
		Ext.widget("main");
	}
});