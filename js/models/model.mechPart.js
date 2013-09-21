var app = app || {};
app.models = app.models || {};
app.models.MechPart = app.models.MechPart || {};

var MechPart = app.models.MechPart;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

MechPart.type =		undefined;
MechPart.model =	undefined;
MechPart.hull =		undefined;
MechPart.shield =	undefined;

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

MechPart.create = function create(type, model) {
	
	var mechPart = {};
	
	mechPart.type = type;
	mechPart.model = model;
	
	mechPart.hull =	100;
	mechPart.shield =	100;
	
	return mechPart;
}