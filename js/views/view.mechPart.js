var app = app || {};
app.views = app.views || {};
app.views.MechPart = app.views.MechPart || {};

var MechPart = app.views.MechPart;

MechPart.getHTMLPart = function getHTMLPart(mechPart, isTargeteable) {
	
	var setTargetHTML;
	
	var html =
		'<div id="skirmish-' + mechPart.idString + '">' +
			'<span id="skirmish-' + mechPart.idString + '-type" class="col-md-2"	>' + mechPart.type + '</span> ' +
			'<span id="skirmish-' + mechPart.idString + '-model" "				>' + mechPart.model + '</span> ' +
			//'<span> Hull:	<input id="Mech' + mech.id + '-part' + i + '-hull" 		class="textCentered skirmish-GUIBar skirmish-hull"		disabled type="text" value="' + mechPart.hull + '"></input></span> ' +
			//'<span> Shield	<input id="Mech' + mech.id + '-part' + i + '-shield"	class="textCentered skirmish-GUIBar skirmish-shield" 	disabled type="text" value="' + mechPart.shield + '"></input></span> ';
			'<span> Hull:	<input id="skirmish-' + mechPart.idString + '-hull" 		class="textCentered skirmish-GUIBar skirmish-hull"		disabled type="text" value="' + mechPart.hull + '"></input></span> ' +
			'<span> Shield	<input id="skirmish-' + mechPart.idString + '-shield"	class="textCentered skirmish-GUIBar skirmish-shield" 	disabled type="text" value="' + mechPart.shield + '"></input></span> ';
	
			if(isTargeteable) setTargetHTML = '<span><button id="skirmish-' + mechPart.idString + '-focus" class="textCentered btn btn-xs btn-danger">Focus</button></span>';
			else setTargetHTML = "";
			
	html += setTargetHTML +
		'</div>';
	
	return html;
}


MechPart.getHTMLParts = function getHTMLParts(mech, isTargeteable) {
	
	var MechPart = app.views.MechPart;
	
	html = "";
	
	$.each(mech.parts, function( i, mechPart ) {
		
		html += MechPart.getHTMLPart(mechPart, isTargeteable);
		/*
		html +=
			'<div id="skirmish-' + mechPart.id + '">' +
				'<span id="skirmish-' + mechPart.id + '-type" class="col-md-2"	>' + mechPart.type + '</span> ' +
				'<span id="skirmish-' + mechPart.id + '-model" "				>' + mechPart.model + '</span> ' +
				//'<span> Hull:	<input id="Mech' + mech.id + '-part' + i + '-hull" 		class="textCentered skirmish-GUIBar skirmish-hull"		disabled type="text" value="' + mechPart.hull + '"></input></span> ' +
				//'<span> Shield	<input id="Mech' + mech.id + '-part' + i + '-shield"	class="textCentered skirmish-GUIBar skirmish-shield" 	disabled type="text" value="' + mechPart.shield + '"></input></span> ';
				'<span> Hull:	<input id="skirmish-' + mechPart.id + '-hull" 		class="textCentered skirmish-GUIBar skirmish-hull"		disabled type="text" value="' + mechPart.hull + '"></input></span> ' +
				'<span> Shield	<input id="skirmish-' + mechPart.id + '-shield"	class="textCentered skirmish-GUIBar skirmish-shield" 	disabled type="text" value="' + mechPart.shield + '"></input></span> ';
		
				if(isTargeteable) setTargetHTML = '<span><button id="skirmish-' + mechPart.id + '-focus" class="textCentered btn btn-xs btn-danger">Focus</button></span>';
				else setTargetHTML = "";
				
		html += setTargetHTML +
			'</div>';
		*/
		
		/*
		html +=
			'<div>' +
				'<span id="Mech' + mech.id + '-part' + i + '-type" class="col-md-3">' + mechPart.type + '</span> ' +
				'<span id="Mech' + mech.id + '-part' + i + '-model" ">' + mechPart.model + '</span> ' +
				'<span id="Mech' + mech.id + '-part' + i + '-shield" ">Shield' + mechPart.shield + '</span> ' +
				'<span id="Mech' + mech.id + '-part' + i + '-hull" "> Hull:' + mechPart.hull + '</span> ' +
			'</div>';
		*/
	});
	
	return html;
}