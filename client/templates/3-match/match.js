Template.match.events = {
	'click button.no': function (e) {
		var data = {
			emitter : this.me._id,
			receiver : this.match._id,
			like : false
		}
		Session.set(Meteor.LIKE, 0);
		Meteor.call("upsertRelation", data);
		Router.go("reaction");
	},
	'click button.yes': function (e) {
		var data = {
			emitter : this.me._id,
			receiver : this.match._id,
			like : true
		}
		Session.set(Meteor.LIKE, 1);
		Meteor.call("upsertRelation", data);
		Router.go("reaction");
	},
	'click button.change': function(e){
		$("#alertModal")
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.find(".message")
		.html("Le Love Bot n’est pas un supermarché.")
		.end();
	}
};