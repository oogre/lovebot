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

PictController = TimeoutController.extend({
	before: function () {
		if(Session.equals(Meteor.PICTURE, false)){
			return Meteor.reload();
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

UserIdentifiedController = PictController.extend({
	before: function () {
		if( _.isEmpty(Session.get(Meteor.USER)) || !Users.findOne(Session.get(Meteor.USER)._id)){
			return Meteor.reload();
		}
		this.next();
	},
	action: function () {
		console.log("this should be overridden!");
	}
});

MatchIdentifiedController = PictController.extend({
	before: function () {
		if( _.isEmpty(Session.get(Meteor.USER_2)) || !Users.findOne(Session.get(Meteor.USER_2)._id)){
			return Meteor.reload();
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
		Session.set(Meteor.CAM_READY, false);
		Session.set(Meteor.PICTURE, false);
		Session.set(Meteor.PICTUREID, false);
		Session.set(Meteor.LIKE, -1);
		Session.set(Meteor.USER, {});
		Session.set(Meteor.USER_2, {});
		Session.set(Meteor.USER_3, {});
		Session.set(Meteor.MATCH, {});
		this.render("start");
	},
	data : function(){
		if(this.params.query.snapPicture){
			return {
				snapPicture : true
			}
		}
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
		var user = Session.get(Meteor.USER);
		var user2 = Session.get(Meteor.USER_2);
		var user3 = Session.get(Meteor.USER_3);
		if( !(_.isEmpty(user) || _.isEmpty(user.picture))   && 
			!(_.isEmpty(user2) || _.isEmpty(user2.picture)) &&
			!(_.isEmpty(user3) || _.isEmpty(user3.picture)) ){
			return {
				user : user, 
				user2 : user2, 
				user3 : user3,
				match : match
			}
		}
		var request = {
			emitter : { 
				$ne: Session.get(Meteor.USER)._id 
			},
			audio : { $exists : 1 },
			lovebot : { $exists : 0 }
		};

		var match = Relations.find(request, {
			limit : 1,
			skip : 	Math.floor( Relations.find(request).count() * Math.random() )
		})
		.fetch()
		.pop();
		if(!match){
			var request = {
				emitter : { 
					$ne: Session.get(Meteor.USER)._id 
				},
				audio : { $exists : 1 }
			};

			match = Relations.find(request, {
				limit : 1,
				skip : 	Math.floor( Relations.find(request).count() * Math.random() )
			})
			.fetch()
			.pop();
		}

		if(!match){
			return Router.go("/");
		} 
		
		user = Session.get(Meteor.USER)._id;
		user = Users.findOne(user);
		user.picture = Images.link(Images.collection.findOne(user.picture));
		Session.set(Meteor.USER, user);

		user2 = match.emitter;
		user2 = Users.findOne(user2);
		user2.picture = Images.link(Images.collection.findOne(user2.picture));
		Session.set(Meteor.USER_2, user2);

		user3 = match.receiver || match.emitter;
		user3 = Users.findOne(user3);
		user3.picture = Images.link(Images.collection.findOne(user3.picture));
		Session.set(Meteor.USER_3, user3);

		match.audio = Audios.link(Audios.collection.findOne(match.audio))
		Session.set(Meteor.MATCH, match);
		return {
			user : user, 
			user2 : user2, 
			user3 : user3,
			match : match
		}
	},
});

Router.route("/reaction", {
	layoutTemplate: "layoutModalBottom",
	controller : "MatchIdentifiedController",
	name: "reaction",
	action : function () {
		this.render("reaction");
	}
});

Router.route("/sadBye", {
	layoutTemplate: "layoutModalBottom",
	controller : "TimeoutController",
	name: "sadBye",
	action : function () {
		this.render("sadBye");
	}
});