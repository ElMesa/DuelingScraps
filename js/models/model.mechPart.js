var app = app || {};
app.models = app.models || {};
app.models.MechPart = app.models.MechPart || {};

var MechPart = app.models.MechPart;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

MechPart.nextId = 1;

//"enum"
MechPart.eStat = {};
MechPart.eStat.hull =	{ id:0, string:"Hull"};
MechPart.eStat.shield = { id:1, string:"Shield"};

MechPart.id =			undefined;
MechPart.idString =		undefined; //{string}	To use in HTML string id
MechPart.mech =			undefined; //{Mech}		from Relation {Mech}	1 <-haves-> 0..*	{MechPart}
MechPart.type =			undefined;
MechPart.model =		undefined;
MechPart.hull =			undefined;
MechPart.shield =		undefined;
MechPart.isDestroyed = 	undefined;

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

MechPart.create = function create(mech, type, model) {
	
	var MechPart = app.models.MechPart;
	
	var mechPart = {};
	
	mechPart.mech =			mech;
	
	mechPart.id =			MechPart.nextId++;
	mechPart.idString = 	"MechPart" + mechPart.id;
	mechPart.type = 		type;
	mechPart.model = 		model;
	
	mechPart.hull =			100;
	mechPart.shield =		100;
	
	mechPart.isDestroyed = 	false;
	
	/*****************************************************************************
	 * 
	 * 			EVENTS
	 * 
	 ******************************************************************************/
	mechPart.onDestroy = function onDestroy() {
		console.log("DestroyedPart: Mech %O part %O", this.mech, this);
		
		mech.onDestroyPart(this);
	}
	
	return mechPart;
}

