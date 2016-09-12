Template.match.next = function (){
	$("#match #audio2").prop("currentTime",0).trigger("play");
	setTimeout(function(){
		Router.go("reaction");	
	}, 1000);
}
Template.match.rendered = function(){
	$("#match #audio1").prop("currentTime",0).trigger("play");
}
Template.match.events = {
	'click button.no': function (e) {
		var data = {
			emitter : this.me._id,
			receiver : this.match._id,
			like : false
		}
		Session.set(Meteor.LIKE, 0);
		Meteor.call("upsertRelation", data);
		Template.match.next();
	},
	'click button.yes': function (e) {
		var data = {
			emitter : this.me._id,
			receiver : this.match._id,
			like : true
		}
		Session.set(Meteor.LIKE, 1);
		Meteor.call("upsertRelation", data);
		Template.match.next();
	},
	'click button.change': function(e){
		
		$("#match #audio3").prop("currentTime",0).trigger("play");
		/*
		$("#alertModal")
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.find(".message")
		.html("Le Love Bot n’est pas un supermarché.")
		.end();
		*/
	}
};