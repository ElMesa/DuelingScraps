var app = app || {};
app.controllers = app.controllers || {};
app.controllers.mainMenu = app.controllers.mainMenu || {};

var controller = app.controllers.mainMenu;
var navigation = app.controllers.navigation;

controller.run = function run(fadeTime) {
	
	controller.init();
	
	$("#pageMainMenu").fadeIn(fadeTime);
}

controller.init = function init() {
	
	var player = app.models.Player;
	
	//controller.playerName = $("#mainMenuPlayerName");
	
	//controller.playerName.html(player.name);
	$("#mainMenuPlayerName").html(player.name);
}

controller.onLogoutClick = function onLogoutClick() {
	
	var player = app.models.Player;
	
	player.logout();
	
	navigation.navigate("#pageMainMenu", "#pageIndex");
}
