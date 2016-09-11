BaseController = RouteController.extend({
	layoutTemplate: "layout",
	before: function () {
		if(Meteor.keyboard){
			Meteor.keyboard.close() ;
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

TimeoutController = RouteController.extend({
	layoutTemplate: "layoutModal",
	before: function () {
		Meteor.resetTimeoutFnc();
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

TimeoutController = RouteController.extend({
	layoutTemplate: "layoutModal",
	before: function () {
		Meteor.resetTimeoutFnc();
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

PictController = TimeoutController.extend({
	before: function () {
		if(Session.equals(Meteor.PICTURE, false)){
			//Router.go("start");
			//return;
			Session.set(Meteor.PICTURE, "http://localhost:3000/images/hjL2kctJr3Q6uJ3C9/original/hjL2kctJr3Q6uJ3C9.jpg");
			Session.set(Meteor.MATCHPICTURE, "http://localhost:3000/images/JjPgKr24zMEjrNcRi/original/JjPgKr24zMEjrNcRi.jpg");
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

UserIdentifiedController = PictController.extend({
	before: function () {
		if(Session.equals(Meteor.USERID, false) || !Users.findOne(Session.get(Meteor.USERID))){
			//Router.go("start");
			//return;
			Session.set(Meteor.USERID, "oJEgf5g6tNjK9tXfv");
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

MatchIdentifiedController = PictController.extend({
	before: function () {
		if(Session.equals(Meteor.MATCHID, false) || !Users.findOne(Session.get(Meteor.MATCHID))){
			//Router.go("start");
			//return;
			Session.set(Meteor.MATCHID, "nq8yBr8md99uBu2kb");
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

Router.configure({
});

Router.route("/start", {
	controller : "BaseController",
	name: "start",
	action : function () {
		//Session.set(Meteor.PICTURE, false);
		//Session.set(Meteor.PICTUREID, false);
		//Session.set(Meteor.USERID, false);
		//Session.set(Meteor.LIKE, -1);
		this.render("start");
	}
});
Router.route("/", {
	controller : "BaseController",
	name: "home",
	action : function () {
		Router.go("start");
	}
});

Router.route("/pictValidation", {
	controller : "TimeoutController",
	name: "pictValidation",
	action : function () {
		this.render("pictValidation");
	}
});

Router.route("/signUp", {
	controller : "PictController",
	name: "signUp",
	action : function () {
		this.render("signUp");
	}
});

Router.route("/match", {
	controller : "UserIdentifiedController",
	name: "match",
	action : function () {
		this.render("match");
	},
	data : function(){
		var request = {
			emitter : { 
				$ne: Session.get(Meteor.USERID) 
			},
			audio : { $exists : 1 }
		};

		var match = Relations.find(request, {
			limit : 1,
			skip : 	Math.floor( Relations.find(request).count() * Math.random() )
		})
		.fetch()
		.pop();

		if(!match){
			return Router.go("/");
		} 
		match = Users.findOne(match.emitter);
		Session.set(Meteor.MATCHID, match._id);
		match.picture = Images.link(Images.collection.findOne(match.picture));
		Session.set(Meteor.MATCHPICTURE, match.picture);
		var me = Users.findOne(Session.get(Meteor.USERID));
		Session.set(Meteor.USER, me);
		Session.set(Meteor.MATCH, match);
		me.picture = Images.link(Images.collection.findOne(me.picture));
		return {
			match : match, 
			me : me
		}
	},
});

Router.route("/reaction", {
	layoutTemplate: "layoutModalBottom",
	controller : "MatchIdentifiedController",
	name: "reaction",
	action : function () {
		this.render("reaction");
	},
	data : function(){
		var matchId = Session.get(Meteor.MATCHID);
		var matchRelation = Relations.find({
			emitter : matchId,
			audio : { $exists : 1 }
		}, {
			limit : 1,
			skip : 	Math.floor(
						Relations.find({
							emitter : matchId,
							audio : { $exists : 1 }
						}).count() * Math.random())
		})
		.fetch()
		.pop();
		if(!matchRelation){
			return Router.go("/");
		} 

		matchRelation.audio = Audios.link(Audios.collection.findOne(matchRelation.audio));
		return matchRelation; 
	}
});

Router.route("/listenTo", {
	controller : "MatchIdentifiedController",
	name: "listenTo",
	action : function () {
		this.render("listenTo");
	},
	data : function(){
		var matchId = Session.get(Meteor.MATCHID);
		var matchRelation = Relations.find({
			emitter : matchId,
			audio : { $exists : 1 }
		}, {
			limit : 1,
			skip : 	Math.floor(
						Relations.find({
							emitter : matchId,
							audio : { $exists : 1 }
						}).count() * Math.random())
		})
		.fetch()
		.pop();
		if(!matchRelation){
			return Router.go("/");
		} 

		matchRelation.audio = Audios.link(Audios.collection.findOne(matchRelation.audio));
		return matchRelation; 
	},
});

Router.route("/confirm", {
	controller : "MatchIdentifiedController",
	name: "confirm",
	action : function () {
		this.render("confirm");
	}
});

Router.route("/sendIt", {
	controller : "MatchIdentifiedController",
	name: "sendIt",
	action : function () {
		this.render("sendIt");
	}
});

Router.route("/thxBye", {
	controller : "TimeoutController",
	name: "thxBye",
	action : function () {
		this.render("thxBye");
	}
});

Router.route("/sadBye", {
	controller : "TimeoutController",
	name: "sadBye",
	action : function () {
		this.render("sadBye");
	}
});