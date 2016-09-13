Template.pictValidation.glitch = function(callback){
	var elem= $("#pictValidation img");
	elem
	.glitch({
		amount: Math.floor(Math.random()*7),
		complete : function(canvas){
			elem.attr("src", canvas.toDataURL("image/jpeg", 0.5));
			callback();
		}
	});
}

Template.pictValidation.next = function(audioClick){
	if(!audioClick)audioClick="audioClick1";
	$("#"+audioClick).trigger("play");
	Template.pictValidation.glitch(function(){
		setTimeout(function(){
			Router.go("signUp");
		}, 1000);
	});
};

Template.pictValidation.helpers({
	picture : function(){
		if (Session.equals(Meteor.PICTURE, false)){
			Meteor.reload();
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
			Template.pictValidation.next("audioClick2");
		})
		.find(".message")
		.html(getRandomPrevSentence());
	},
	'click button.next': function (e) {
		Template.pictValidation.next("audioClick1");
	}
};


Template.pictValidation.rendered = function(){
	$(".container.main")
	.css({
		"opacity": 1 
	});
}