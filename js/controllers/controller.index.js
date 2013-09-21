var app = app || {};
app.controllers = app.controllers || {};
app.controllers.index = app.controllers.index || {};

var controller = app.controllers.index;
var navigation = app.controllers.navigation;

controller.run = function run(fadeTime) {
	
	controller.init();
	
	$("#pageIndex").fadeIn(fadeTime);
}

controller.onLoginClick = function onLoginClick() {

	var player = app.models.Player;
		
	loginSuccess = 		player.login($("#inpLogin").val(), $("#inpPassword").val())
	
	if(loginSuccess)	navigation.navigate("#pageIndex", "#pageMainMenu");
	else  { //login failed
		//TODO - 3 - onLogin failed GUI
	}

};