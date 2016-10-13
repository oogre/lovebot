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


		$("#alertModal")
		.find(".modal-body img")
		.attr("src", "timeout.png")
		.end()
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.one('hidden.bs.modal', function (event) {
			Template.match.next();
		})
		.find(".modal-body button")
		.html("Je comprends")
		.end()
		.find(".message")
		.html("Le LOVEBOT n'est pas un supermarché, une seule personne vous sera suggérée")
		.end();
		



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
	'click button.change.pull-left': function(e){
		
		$("#match #audio3").prop("currentTime",0).trigger("play");
		$(".matched-user-picture").addClass("changeLeft");
		setTimeout(function(){
			$(".matched-user-picture").removeClass("changeLeft");
		}, 500);

		change

		Meteor.call("updateUser", Session.get(Meteor.USER)._id, {
			atTheFirstMatchPropOther : 1,
		});
	},
	'click button.change.pull-right': function(e){
		
		$("#match #audio3").prop("currentTime",0).trigger("play");
		$(".matched-user-picture").addClass("changeRight");
		setTimeout(function(){
			$(".matched-user-picture").removeClass("changeRight");
		}, 500);
/*
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
*/
		change

		Meteor.call("updateUser", Session.get(Meteor.USER)._id, {
			atTheFirstMatchPropOther : 1,
		});
	}
};