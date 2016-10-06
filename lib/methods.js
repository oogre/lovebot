Meteor.methods({
	createUser : function(data){
		this.unblock();
		var userId = Users.insert({
			createdAt : (new Date()).toISOString(),
			picture : data.picture,
		});

		if(this.isSimulation)
		{
			Session.set(Meteor.USER, {_id : userId});
		}
		return userId;
	},

	updateUser : function(userId, data){
		this.unblock();
		var user = Users.findOne(userId);
		if(!user){
			throw new Meteor.Error("NO USER FOUND", {user : userId, data : data});
		}
		Users.update(userId, {
			$set : data
		});
		return userId;
	},

	findOrCreateUser : function(data){
		this.unblock();
		if( ! Match.test(data.firstname, Meteor.NonEmptyString) ||
			! Match.test(data.picture, Meteor.NonEmptyString) ||
			! Match.test(data.email, Meteor.ValidEmail) 
		){
			throw new Meteor.Error("wrong formatting object", "Les donnée reçue sont incomplète");
		}
		data.picture = Images.collection.findOne({_id : data.picture});
		if(!data.picture){
			throw new Meteor.Error("no picture found", "L'image n'existe pas sur le serveur");	
		}

		data.firstname = data.firstname.toLowerCase();
		data.email = data.email.toLowerCase();

		var user = Users.findOne({
			email : data.email
		});
		
		if(!user){
			user = {};
			user._id = Users.insert({
				firstname : data.firstname,
				email : data.email,
				picture : data.picture._id,
				gender : data.gender,
				sex : data.sex,
				age : data.age
			});
		}
		if(this.isSimulation)
		{
			Session.set(Meteor.USER, {_id : user._id});
		}
		return user._id;
	},

	upsertRelation : function(data){
		this.unblock();
		var relation = Relations.findOne({
			emitter : data.emitter,
			receiver : data.receiver,
		});

		if(!relation){
			Relations.insert(data);
		}else{
			Relations.update(relation._id, {
				$set : {
					like : data.like
				}
			});
		}
	},
	updateRelationWithAudio : function(data){
		this.unblock();
		var relation = Relations.findOne({
			emitter : data.emitter,
			receiver : data.receiver,
		});

		if(!relation){
			throw new Meteor.Error("The relation doesn't exist", "Cette relation n'existe pas");	
		}
		if(relation.audio){
			throw new Meteor.Error("audio already exist for this relation", "Cette relation à déjà un commentaire");	
		}
		Relations.update({
			emitter : data.emitter,
			receiver : data.receiver,
		}, {
			$set : {
				audio : data.audio
			}	
		});


	},
	sendWelcomEmail : function(data){
		this.unblock();
		Jobs.insert({
			name : "sendEmail",
			done : 0,
			data : {
				template : "participation_mail",
				to: data.receiver
			}
		});
	},

	sendNotificationEmail : function(data){
		this.unblock();
		Jobs.insert({
			name : "sendEmail",
			done : 0,
			data : {
				template : "notification_mail",
				user1: data.user1, 
				user2: data.user2, 
				user3: data.user3, 
			}
		});
	},
	sendMatchEmail : function(data){
		this.unblock();
		var relation = Relations.findOne({
			emitter : data.emitter,
			receiver : data.receiver
		});
		
		if(!relation){
			throw new Meteor.Error("The relation doesn't exist", {
				data : data
			});	
		}

		Jobs.insert({
			name : "sendEmail",
			done : 0,
			data : {
				template : "match_mail",
				user1: data.emitter, 
				user2: data.receiver, 
				audio: relation.audio, 
			}
		});
	}
})