Template.pictValidation.helpers({
	picture : function(){
		if (Session.equals(Meteor.PICTURE, false)){
			Router.go("start");
		}
		return Session.get(Meteor.PICTURE);
	}
});

var prevSentences = [
	"Les algorythmes de \"The LOVEBOT\" vous trouve ravissant",
	"Les algorythmes de \"The LOVEBOT\" vous trouve ravissante",
	"Notre système trouve cette photo très réussie"
]
function getRandomPrevSentence(){
	return prevSentences[Math.floor(Math.random() * prevSentences.length)]
};

Template.pictValidation.events = {
	'click button.prev': function (e) {
		$("#alertModal")
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.one('hidden.bs.modal', function (event) {
			$(e.target)
			.attr("disabled", "disabled")
			.removeClass("prev")
			.removeClass("btn-danger")
			.addClass("btn-default")
			.html("Clickez là ->");
		})
		.find(".message")
		.html(getRandomPrevSentence());
	},
	'click button.next': function (e) {
		Router.go("signUp");
	}
};