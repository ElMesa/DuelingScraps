var app = app || {};
app.models = app.models || {};
app.models.Player = app.models.Player || {};

var Player = app.models.Player;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

Player.nextId = 1;						//{number}
Player.players = [];					//{Player[]}
Player.activePlayer = undefined;		//{Player}

Player.id = 		undefined;			//{number}
Player.name = 		undefined;			//{string}
Player.password = 	undefined;			//{string}
Player.isLogged = 	undefined;			//{bool}
Player.mech =		undefined;			//{Mech}		from Relation {Player}	1 <-haves-> 0..*	{Mech}
Player.skirmishes = [];					//{Skirmish[]}
Player.skirmishes.nextId = undefined;	//{number}
Player.activeSkirmish = undefined;		//{Skirmish}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

Player.create = function create(name, password) {
	
	var Player = app.models.Player;
	
	//TODO - 1 - Que devuelva un objeto, y crear Player.players[] con los players registrados
	var player = {};
	
	player.id =					Player.nextId++;
	player.name = 				name;
	player.password = 			password;
	
	player.mech =				Mech.create(player, "Atlas Tier 1", "MyAtlas");
	
	player.skirmishes =			[];
	player.skirmishes.nextId =	1;
	player.activeSkirmish =		undefined;
	
	/*****************************************************************************
	 * 
	 * 			METHODS
	 * 
	 ******************************************************************************/
	player.resetMech = function resetMech() {
		player.mech = Mech.create(player, "Atlas Tier 1", "MyAtlas");
	}
	
	/*****************************************************************************
	 * 
	 * 			EVENTS
	 * 
	 ******************************************************************************/
	player.onExecuteAction = function onExecuteAction() {
		
		var mech =			player.mech;
		var skills =		player.mech.skills;
		
		//Pick random skill
		var skillNumber =	Math.floor(Math.random() * skills.length);
		var skill = 		skills[skillNumber];
		
		//Use it
		skill.useOn(mech.targetMech);
	}
	
	return player;
}

Player.login = function login(name, password) {

	var Player = app.models.Player;
	
	var player;
	//player.name = 		name;
	//player.password = 	password;
	
	//TODO - 3 - Comprobar login y pass en "persistencia"
	Player.isLogged = 	true;
	
	if(Player.isLogged) {
		
		player = Player.create(name, password);
		
		Player.activePlayer = player;
		
		Player.players.push(player);
	}
	
	return Player.isLogged;
}

Player.logout = function logout() {
	
	var Player = app.models.Player;

	Player.name = 		undefined;
	Player.password = 	undefined;
	
	//TODO - 3 - Comprobar login y pass en "persistencia"
	Player.isLogged = 	false;
}