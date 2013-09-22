var app = app || {};
app.views = app.views || {};
app.views.skirmish = app.views.skirmish || {};

var view = app.views.skirmish;

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/
view.updateMechPart = function updatePart(targetPart) {
	
	$("#skirmish-" + targetPart.idString + "-shield").val(targetPart.shield);
	$("#skirmish-" + targetPart.idString + "-hull").val(targetPart.hull);
}

view.showDialogWin = function showDialogWin() {
	
	var controller = 	app.controllers.skirmish;
	
	$( "#dialog-win" ).dialog({
		//modal: true,
		//autoOpen: false,
		show: {
			effect: "scale",
			duration: 1000
		},
		hide: {
			effect: "scale",
			duration: 1000
		},
		buttons: {
			/*
			Ok: function() {
				$( this ).dialog( "close" );
			}
			*/
			"Back to main menu": function() {
				$( this ).dialog( "close" );
				
				controller.onBackToMainMenu();
			}
		}
	});
}

view.showDialogLoose = function showDialogLoose() {
	
	var controller = 	app.controllers.skirmish;
	
	$( "#dialog-loose" ).dialog({
		show: {
			effect: "scale",
			duration: 1000
		},
		hide: {
			effect: "scale",
			duration: 1000
		},
		buttons: {
			"Back to main menu": function() {
				$( this ).dialog( "close" );
				
				controller.onBackToMainMenu();
			}
		}
	});
}