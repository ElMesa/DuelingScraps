var app = app || {};
app.controllers = app.controllers || {};
app.controllers.mainMenu = app.controllers.mainMenu || {};

var controller = app.controllers.mainMenu;
var navigation = app.controllers.navigation;

controller.run = function run(fadeTime) {
	
	var controller = app.controllers.mainMenu;
	
	controller.init();
	
	$("#pageMainMenu").fadeIn(fadeTime);
}

controller.init = function init() {
	
	var player = app.models.Player.activePlayer;
	
	controller.playerName = 		$("#mainMenuPlayerName");
	//controller.skirmishesCount =	$("#mainMenuSkirmishesPlayed");
	//controller.skirmishesLog =		$("#skirmishesLog");
	
	controller.playerName.html(player.name);
	//controller.skirmishesCount.html(player.skirmishes.length);
	
	/*
	var html = "<br></br><br></br>";
	var i;
	var skirmishes = player.skirmishes;
	for(i = 0; i < skirmishes.length; i++) {
		html += '<br></br><div >Skirmish ' + skirmishes[i].number + ": ";
		
		if(skirmishes[i].winner == player)	html += "You WON !";
		else								html += "You ... loosed ...";
		
		html += '</div>';
	}
	controller.skirmishesLog.html(html);
	*/

}

/*****************************************************************************
 * 
 * 			ON CLICK
 * 
 ******************************************************************************/

controller.onSkirmishClick = function onSkirmishClick() {
	navigation.navigate("#pageMainMenu", "#pageSkirmish");
}

controller.onLogoutClick = function onLogoutClick() {
	
	var player = app.models.Player;
	
	player.logout();
	
	navigation.navigate("#pageMainMenu", "#pageIndex");
}