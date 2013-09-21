var app = app || {};
app.views = app.views || {};
app.views.MechPart = app.views.MechPart || {};

var MechPart = app.views.MechPart;

MechPart.getHTML = function getHTML(mech) {
	
	html = "";
	
	$.each(mech.parts, function( i, mechPart ) {
		
		html +=
			'<div>' +
				'<span id="Mech' + mech.id + '-part' + i + '-type" class="col-md-2"	>' + mechPart.type + '</span> ' +
				'<span id="Mech' + mech.id + '-part' + i + '-model" "				>' + mechPart.model + '</span> ' +
				'<span">Shield	<input id="Mech' + mech.id + '-part' + i + '-shield"	class="textCentered skirmish-shield" 	disabled type="text" value="' + mechPart.shield + '"></input></span> ' +
				'<span"> Hull:	<input id="Mech' + mech.id + '-part' + i + '-hull" 		class="textCentered skirmish-hull"		disabled type="text" value="' + mechPart.hull + '"></input></span> ' +
			'</div>';
		
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