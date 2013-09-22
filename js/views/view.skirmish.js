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