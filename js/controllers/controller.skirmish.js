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
controller.player.mech.skills = undefined; //{DOMElement}

controller.enemy = {};
controller.enemy.name = 		undefined; //{DOMElement}
controller.enemy.mech = {};
controller.enemy.mech.model = 	undefined; //{DOMElement}
controller.enemy.mech.name = 	undefined; //{DOMElement}
controller.enemy.mech.parts = 	undefined; //{DOMElement}
controller.enemy.mech.skills =	undefined; //{DOMElement}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/
controller.run = function run(fadeTime) {
	
	var controller = app.controllers.skirmish;
	
	controller.init();
	
	$("#pageSkirmish").fadeIn(fadeTime);
	
	setTimeout(function() {
		controller.skirmish.run();
	}, fadeTime);
}

controller.init = function init() {
	
	var Skirmish = app.models.Skirmish;
	var Player = app.models.Player;
	var controller = app.controllers.skirmish;
	var viewMechPart = app.views.MechPart;
	var viewSkill = app.views.Skill;
	
	var player = Player.activePlayer;
	player.resetMech();
	
	//Creamos el skirmish
	controller.skirmish = Skirmish.create(controller, player);
	
	var enemy = controller.skirmish.enemy;
		
	//Capturamos los elementos del dom, para accederlos mediante atributos del controlador
	controller.skirmishNumber = 	$("#skirmish-number");
	
	controller.player = {};
	controller.player.name = 		$("#skirmish-player-name");
	controller.player.mech = {};
	controller.player.mech.model = 	$("#skirmish-player-mech-model");
	controller.player.mech.name = 	$("#skirmish-player-mech-name");
	controller.player.mech.parts = 	$("#skirmish-player-mech-parts");
	controller.player.mech.skills = $("#divSkills-Player");	
	
	controller.enemy = {};
	controller.enemy.name = 		$("#skirmish-enemy-name");
	controller.enemy.mech = {};
	controller.enemy.mech.model = 	$("#skirmish-enemy-mech-model");
	controller.enemy.mech.name = 	$("#skirmish-enemy-mech-name");
	controller.enemy.mech.parts = 	$("#skirmish-enemy-mech-parts");
	controller.enemy.mech.skills =	$("#divSkills-Enemy");
	
	controller.skirmishNumber.html(Skirmish.number);
	
	controller.player.name.html			(player.name);
	controller.player.mech.model.html	(player.mech.model);
	controller.player.mech.name.html	(player.mech.name);
	controller.player.mech.parts.html	(viewMechPart.getHTMLParts(player.mech));
	controller.player.mech.skills.html	(viewSkill.getHTML(player.mech));
	
	controller.enemy.name.html			(enemy.name);
	controller.enemy.mech.model.html	(enemy.mech.model);
	controller.enemy.mech.name.html		(enemy.mech.name);
	controller.enemy.mech.parts.html	(viewMechPart.getHTMLParts(enemy.mech));
	//controller.enemy.mech.skills.html	(viewSkill.getHTML(enemy.mech));
}

controller.onFinish = function onFinish() {
	
	var Player =		app.models.Player;
	var view =			app.views.skirmish;
	
	var player =	Player.activePlayer;
	var skirmish =	player.activeSkirmish;
	
	if(skirmish.winner == player)	view.showDialogWin();
	else 							view.showDialogLoose();
	
	
}

controller.onClickSkill = function onClickSkill(mechId, skillId) {
	
	var Player =		app.models.Player;
	var Skirmish =		app.models.Skirmish;
	var controller = 	app.controllers.skirmish;
	var view =			app.views.skirmish;
	
	var player = Player.activePlayer;
	var skirmish = player.activeSkirmish;
	
	var mech =	Skirmish.getMechById(	skirmish, mechId);
	var skill = Skirmish.getSkillById(	skirmish, skillId)
	
	if(!skirmish.isFinished) skill.useOn(mech.targetMech, mech.targetPart);
	
	//view.updateMechPart(targetPart);
	
}

controller.onMechPartModified = function onMechPartModified(mechPart) {
	view.updateMechPart(mechPart);
}

controller.onBackToMainMenu = function onBackToMainMenu() {
	
	var navigation = app.controllers.navigation;
	
	navigation.navigate("#pageSkirmish", "#pageMainMenu");
}
