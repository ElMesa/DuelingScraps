var app = app || {};
app.models = app.models || {};
app.models.Mech = app.models.Mech || {};

var Mech = app.models.Mech;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

Mech.nextId = 1;

Mech.id = 		undefined;
Mech.model = 	"Atlas Tier 1";
Mech.name = 	"MyAtlas";
Mech.parts = 	[];

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

Mech.create = function create(model, name) {
	
	var Mech = app.models.Mech;
	var MechPart = app.models.MechPart;
	
	var mech = {}
	
	mech.id = Mech.nextId++;
	
	mech.model =	model;
	mech.name =		name;
	
	mech.parts = [];
	mech.parts.push(MechPart.create("Head","Tier 1"));
	mech.parts.push(MechPart.create("Torso","Tier 1"));
	mech.parts.push(MechPart.create("LeftArm","Tier 1"));
	mech.parts.push(MechPart.create("RightArm","Tier 1"));
	mech.parts.push(MechPart.create("LeftLeg","Tier 1"));
	mech.parts.push(MechPart.create("RightLeg","Tier 1"));
	
	return mech;
}