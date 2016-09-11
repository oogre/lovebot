Template.sendIt.events = {
	'click button.yes': function (e) {
		//Router.go("sendIt");
		Meteor.call("sendEmail", {
			emitter : Session.get(Meteor.USERID),
			receiver : Session.get(Meteor.MATCHID),
		});
		Router.go("thxBye");
	},
	'click button.no': function (e) {
		Router.go("sadBye");
	}
};
