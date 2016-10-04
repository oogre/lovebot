Template.match.next = function (){
	$("#match #audio2").prop("currentTime",0).trigger("play");
	setTimeout(function(){
		Router.go("reaction");	
	}, 1000);
}

Template.match.rendered = function(){
	$("#match #audio1").prop("currentTime",0).trigger("play");
	$(".container.main")
	.addClass("fixe");
	$(".matched-user-picture")
	.css({
		"backgroundImage": "url("+this.data.user2.picture+")"
	});
};

Template.match.events = {
	'click button.no': function (e) {
		var data = {
			emitter : Session.get(Meteor.USER)._id,
			receiver : Session.get(Meteor.USER_2)._id,
			like : false
		}
		Meteor.call("updateUser", Session.get(Meteor.USER)._id, {
			atTheFirstMatchProp : "dislike",
		});
		Session.set(Meteor.LIKE, 0);
		Meteor.call("upsertRelation", data);
		Template.match.next();
	},
	'click button.yes': function (e) {
		var data = {
			emitter : Session.get(Meteor.USER)._id,
			receiver : Session.get(Meteor.USER_2)._id,
			like : true
		}

		Meteor.call("updateUser", Session.get(Meteor.USER)._id, {
			atTheFirstMatchProp : "like",
		});
		Session.set(Meteor.LIKE, 1);
		Meteor.call("upsertRelation", data);
		Template.match.next();
	},
	'click button.change': function(e){
		$("#match #audio3").prop("currentTime",0).trigger("play");
		$("#alertModal")
		.find(".modal-body img")
		.attr("src", "timeout.png")
		.end()
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.find(".message")
		.html("Le LOVEBOT n'est pas un supermarché");

		Meteor.call("updateUser", Session.get(Meteor.USER)._id, {
			atTheFirstMatchPropOther : 1,
		});
	}
};