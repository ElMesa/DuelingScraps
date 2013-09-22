var app = app || {};
app.controllers = app.controllers || {};
app.controllers.navigation = app.controllers.navigation || {};

var navigation = app.controllers.navigation;

navigation.fadeTime = 1000;

navigation.navigate = function navigate(idFrom, idTo) {
	
	var targetController;
	
	if(idTo == "#pageIndex")			targetController = app.controllers.index;
	else if(idTo == "#pageMainMenu")	targetController = app.controllers.mainMenu;
	else if(idTo == "#pageSkirmish")	targetController = app.controllers.skirmish;
	
	//Ocultamos pageIndex
	$(idFrom).fadeOut(navigation.fadeTime);

	setTimeout(function() {

		//Lanzamos "pageMainMenu"
		targetController.run(navigation.fadeTime);
		
	}, navigation.fadeTime);
}