Template.confirm.events = {
	'click button.yes': function (e) {
		Router.go("sendIt");
	},
	'click button.no': function (e) {
		Router.go("sadBye");
	}
};
