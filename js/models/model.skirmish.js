var app = app || {};
app.models = app.models || {};
app.models.Skirmish = app.models.Skirmish || {};

var Skirmish = app.models.Skirmish;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

//				STATIC	ATTRIBUTTES
Skirmish.nextId = 1;
//Skirmish.activeSkirmish = 	undefined; //{Skirmish}

//				INSTACE ATTRIBUTTES
Skirmish.controller =		undefined; //{controller.skirmish}

Skirmish.id =				undefined; //{number}
Skirmish.number =			undefined; //{number}
Skirmish.player =			undefined; //{Player}
Skirmish.enemy =			undefined; //{Player}
Skirmish.isFinished =		undefined; //{bool}
Skirmish.winner =			undefined; //{Player}

Skirmish.updateId =			undefined; //{number}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

Skirmish.create = function create(controller, player) {
	
	var Player =	app.models.Player;
	var Skirmish =	app.models.Skirmish;

	var playerMech;
	var enemyMech;
	
	var skirmish = {};
	
	skirmish.controller =				controller;
	
	skirmish.id =						Skirmish.nextId++; 
	skirmish.number =					player.skirmishes.nextId++;
	skirmish.player =					player;
	skirmish.player.activeSkirmish = 	skirmish;
	skirmish.enemy =					Player.create("Enemy","password");
	skirmish.enemy.activeSkirmish = 	skirmish;
	skirmish.isFinished =				false;
	skirmish.winner =					undefined;
	
	playerMech =	skirmish.player.mech;
	enemyMech =		skirmish.enemy.mech;
	
	playerMech.targetMech =	enemyMech;
	enemyMech.targetMech =	playerMech;
	
	//Skirmish.activeSkirmish = skirmish;
	
	/*****************************************************************************
	 * 
	 * 			METHODS
	 * 
	 ******************************************************************************/
	skirmish.run = function run() {
		skirmish.updateId = setInterval(skirmish.onUpdate, 2000);
	}
	
	/*****************************************************************************
	 * 
	 * 			EVENTS
	 * 
	 ******************************************************************************/
	skirmish.onUptade = function onUpdate() {
		
		console.log("model.Skirmish updated !");
	}
	
	skirmish.onDestroyMech = function(playerAtacked, mechDestroyed) {
		
		console.log("DestroyedMech: Skirmish %O PlayerAtacked %O MechDestroyed %O", this, playerAtacked, mechDestroyed);
		
		skirmish.onFinish();
	}
	
	skirmish.onFinish = function onFinish() {
		
		this.isFinished = true;
		
		if(playerAtacked == this.enemy)		this.winner = this.player;
		else								this.winner = this.enemy;
		
		this.player.skirmishes.push($.extend({},this));	//Almacenamos el log del Skirmish
		
		console.log("New Skirmish Log: SkirmishFinished %O Winner %O SkirmishesLog %O", this, this.winner, this.player.skirmishes);
		
		clearInterval(skirmish.updateId);
		
		this.controller.onFinish();
	}
	
	return skirmish;
}

Skirmish.getMechById = function getMechById(skirmish, mechId) {
	
	var mech;
	
	if(skirmish.player.mech.id == mechId) 	mech = skirmish.player.mech;
	else									mech = skirmish.enemy.mech;
	
	return mech;
}

Skirmish.getSkillById = function getSkillById(skirmish, skillId) {
	
	var skill;
	var skillFound = false;
	
	var playerMech =	skirmish.player.mech;
	var enemyMech =		skirmish.enemy.mech;
	
	var i = 0;
	
	while(!skillFound && i < playerMech.skills.length) {
		if(playerMech.skills[i].id == skillId) {
			skill = playerMech.skills[i];
			skillFound = true;
		}
		i++;
	}
	
	i = 0;
	while(!skillFound && i < enemyMech.skills.length) {
		if(enemyMech.skills[i].id == skillId) {
			skill = enemyMech.skills[i];
			skillFound = true;
		}
		i++;
	}
	
	return skill;
}