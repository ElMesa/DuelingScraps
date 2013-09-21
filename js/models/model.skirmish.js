var app = app || {};
app.models = app.models || {};
app.models.Skirmish = app.models.Skirmish || {};

var Skirmish = app.models.Skirmish;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

Skirmish.nextId = 1;

Skirmish.id =		undefined; //{number}
Skirmish.number =	undefined; //{number}
Skirmish.player =	undefined; //{Player}
Skirmish.enemy =	undefined; //{Player}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

Skirmish.create = function create(player) {
	
	var Player =	app.models.Player;
	var Skirmish =	app.models.Skirmish;

	var skirmish = {};
	
	skirmish.id =		Skirmish.nextId++; 
	skirmish.number =	player.skirmishes.nextId++;
	skirmish.player =	player;
	skirmish.enemy =	Player.create("Enemy","password");
	
	return skirmish;
}