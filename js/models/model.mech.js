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

Mech.id = 			undefined; //{number}
Mech.player = 		undefined; //{Player}		from Relation {Player}	1 <-haves-> 0..*	{Mech}
Mech.model = 		undefined; //{string}
Mech.name = 		undefined; //{string}
Mech.parts = 		undefined; //{MechPart[]}	from Relation {Mech}	1 <-haves-> 0..*	{MechPart}
Mech.skills =		undefined; //{Skill[]}
Mech.targetMech =	undefined; //{Mech}
Mech.targetPart =	undefined; //{MechPart}
Mech.isMechDestroyed = undefined; //{bool}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/

Mech.create = function create(player, model, name) {
	
	var Mech = app.models.Mech;
	var MechPart = app.models.MechPart;
	var Skill = app.models.Skill;
	
	var mech = {}
	
	mech.player = player;
	
	mech.id = Mech.nextId++;
	
	mech.model =	model;
	mech.name =		name;
	
	mech.parts = [];
	mech.parts.push(MechPart.create(mech, "Head","Tier 1"));
	mech.parts.push(MechPart.create(mech, "Torso","Tier 1"));
	mech.parts.push(MechPart.create(mech, "LeftArm","Tier 1"));
	mech.parts.push(MechPart.create(mech, "RightArm","Tier 1"));
	mech.parts.push(MechPart.create(mech, "LeftLeg","Tier 1"));
	mech.parts.push(MechPart.create(mech, "RightLeg","Tier 1"));
	
	mech.skills = [];
	mech.skills.push(Skill.create("Autocannon", 15, 1));
	mech.skills.push(Skill.create("Laser", 20, 0));
	mech.skills.push(Skill.create("Missile", 50, 0.5));
	mech.skills.push(Skill.create("DebugNuke", 100, 1));
	//mech.skills.push(Skill.create("Heal", 20, 0));
	
	mech.targetMech =	undefined; //Defined on skirmish by {controller.Skirmish}
	mech.targetPart =	undefined; //Defined on skirmish by {controller.Skirmish}
	
	mech.isMechDestroyed = false;
	
	/*****************************************************************************
	 * 
	 * 			EVENTS
	 * 
	 ******************************************************************************/
	mech.onDestroyPart = function onDestroyPart(destroyedMechPart) {
		
		var hasPartAlive = false;
		
		var mechPart;
		
		//Check if all the mech is destroyed
		var i = 0;
		while(!hasPartAlive && i < this.parts.length) {
			
			mechPart = this.parts[i];
			
			if(!mechPart.isDestroyed) hasPartAlive = true;
			
			i++;
		}
		
		if(!hasPartAlive) {
			
			console.log("DestroyedMech: Player %O Mech %O", this.player, this);
			
			this.isMechDestroyed = true;
			
			this.player.activeSkirmish.onDestroyMech(this.player, this);
		}
	}
	
	return mech;
}