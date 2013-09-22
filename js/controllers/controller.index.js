var app = app || {};
app.controllers = app.controllers || {};
app.controllers.index = app.controllers.index || {};

var controller = app.controllers.index;
var navigation = app.controllers.navigation;

controller.run = function run(fadeTime) {
	
	var controller = app.controllers.index;
	
	//controller.init();
	
	$("#pageIndex").fadeIn(fadeTime);
}

controller.onLoginClick = function onLoginClick() {

	var player = app.models.Player;
	
	var playerName = $("#inpLogin").val();
	var playerPassword = $("#inpPassword").val();
	
	loginSuccess = 		player.login(playerName, playerPassword);
	
	if(loginSuccess)	navigation.navigate("#pageIndex", "#pageMainMenu");
	else  { //login failed
		//TODO - 3 - onLogin failed GUI
	}

};