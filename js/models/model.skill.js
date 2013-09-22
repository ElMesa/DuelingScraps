var app = app || {};
app.models = app.models || {};
app.models.Skill = app.models.Skill || {};

var Skill = app.models.Skill;

/*****************************************************************************
 * 
 * 			ATTRIBUTES
 * 
 ******************************************************************************/

Skill.nextId = 1;

Skill.id =					undefined; //{number}
Skill.name =				undefined; //{string}
Skill.shieldPenetration = 	undefined; //{number}
//Skill.targetStat = 		undefined; //{"enum" MechPart.eStat}
Skill.effectAmount =		undefined; //{number}

/*****************************************************************************
 * 
 * 			METHODS
 * 
 ******************************************************************************/
Skill.create = function create(name, effectAmount, shieldPenetration){
		
	var skill = {};
	
	skill.id = Skill.nextId++;
	skill.name =				name;
	skill.shieldPenetration = 	shieldPenetration;
	//skill.targetStat = 		undefined; //{"enum" MechPart.eStat}
	skill.effectAmount =		effectAmount; //{number}
	
	skill.useOn = function useOn(targetMech, targetPart) {
		
		var shieldDamage = skill.effectAmount * (1 - skill.shieldPenetration);
		var hullDamage = skill.effectAmount * skill.shieldPenetration;
		var damageTresspasingShield = 0;
				
		if(!targetPart) {
			do {
				 targetId = Math.floor((Math.random()*6));
				 targetPart = targetMech.parts[targetId];
			} while(targetPart.isDestroyed);
		}
		
		
		//Si hay escudo, recibe el daño correspondiente
		if(targetPart.shield > 0) {
			
			targetPart.shield -= shieldDamage;
			
			//Si se hace mas daño que escudo, este pasa al hull
			if(targetPart.shield < 0) {
				damageTresspasingShield = targetPart.shield * -1; 
				targetPart.shield = 0;
			}
			
			targetPart.hull -= hullDamage + damageTresspasingShield;
			
			if(targetPart.hull <= 0) {
				targetPart.isDestroyed = true;
				targetPart.hull = 0;
				
				targetPart.onDestroy();
			}
		}
		
		//TODO - 2 - Sustituir, el return, por un sistema de eventos: controlador.eventos.onShieldDepleted(player, part) y asi para el hull curaciones etc
		return targetPart;
	};
	
	return skill;
}