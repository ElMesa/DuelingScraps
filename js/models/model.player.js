var app = app || {};
app.models = app.models || {};
app.models.Player = app.models.Player || {};

app.models.Player.name = "";
app.models.Player.isLogged = false;

var player = app.models.Player;

player.login = function login(name, password) {

	player.name = 		name;
	player.password = 	password;
	
	//TODO - 3 - Comprobar login y pass en "persistencia"
	player.isLogged = 	true;
	
	return player.isLogged;
}

player.logout = function logout() {
	
	player.name = 		undefined;
	player.password = 	undefined;
	
	//TODO - 3 - Comprobar login y pass en "persistencia"
	player.isLogged = 	false;
}