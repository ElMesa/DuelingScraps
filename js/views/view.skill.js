var app = app || {};
app.views = app.views || {};
app.views.Skill = app.views.Skill || {};

var View = app.views.Skill;

View.getHTML = function getHTML(mech) {
	
	html = "";
	
	$.each(mech.skills, function (i, skill) {
	
		html += '<button type="button" class="btn btn-lg btn-default" onclick="javascript:app.controllers.skirmish.onClickSkill(' + mech.id + ',' + skill.id + ')">' + skill.name + '</button>';
		
	});
	
	return html;
}