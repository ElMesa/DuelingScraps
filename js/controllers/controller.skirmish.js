var app = app || {};
app.controllers = app.controllers || {};
app.controllers.skirmish = app.controllers.skirmish || {};

var controller = app.controllers.skirmish;
var navigation = app.controllers.navigation;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

controller.skirmish = 			undefined; //{Skirmish}

controller.skirmishNumber = 	undefined; //{DOMElement}

controller.player = {};
controller.player.name = 		undefined; //{DOMElement}
controller.player.mech = {};
controller.player.mech.model = 	undefined; //{DOMElement}
controller.player.mech.name = 	undefined; //{DOMElement}
controller.player.mech.parts = 	undefined; //{DOMElement}

controller.enemy = {};
controller.enemy.name = 		undefined; //{DOMElement}
controller.enemy.mech = {};
controller.enemy.mech.model = 	undefined; //{DOMElement}
controller.enemy.mech.name = 	undefined; //{DOMElement}
controller.enemy.mech.parts = 	undefined; //{DOMElement}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/
controller.run = function run(fadeTime) {
	
	var controller = app.controllers.skirmish;
	
	controller.init();
	
	$("#pageSkirmish").fadeIn(fadeTime);
}

controller.init = function init() {
	
	var Skirmish = app.models.Skirmish;
	var Player = app.models.Player;
	var controller = app.controllers.skirmish;
	var viewMechPart = app.views.MechPart;
	
	var player = Player.activePlayer;
	
	//Creamos el skirmish
	controller.skirmish = Skirmish.create(player);
	
	var enemy = controller.skirmish.enemy;
		
	//Capturamos los elementos del dom, para accederlos mediante atributos del controlador
	controller.skirmishNumber = 	$("#skirmish-number");
	
	controller.player = {};
	controller.player.name = 		$("#skirmish-player-name");
	controller.player.mech = {};
	controller.player.mech.model = 	$("#skirmish-player-mech-model");
	controller.player.mech.name = 	$("#skirmish-player-mech-name");
	controller.player.mech.parts = 	$("#skirmish-player-mech-parts");
	
	controller.enemy = {};
	controller.enemy.name = 		$("#skirmish-enemy-name");
	controller.enemy.mech = {};
	controller.enemy.mech.model = 	$("#skirmish-enemy-mech-model");
	controller.enemy.mech.name = 	$("#skirmish-enemy-mech-name");
	controller.enemy.mech.parts = 	$("#skirmish-enemy-mech-parts");
	
	controller.skirmishNumber.html(Skirmish.number);
	
	controller.player.name.html			(player.name);
	controller.player.mech.model.html	(player.mech.model);
	controller.player.mech.name.html	(player.mech.name);
	controller.player.mech.parts.html	(viewMechPart.getHTML(player.mech));
	
	controller.enemy.name.html			(enemy.name);
	controller.enemy.mech.model.html	(enemy.mech.model);
	controller.enemy.mech.name.html		(enemy.mech.name);
	controller.enemy.mech.parts.html	(viewMechPart.getHTML(enemy.mech));
}