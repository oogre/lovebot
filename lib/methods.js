Meteor.methods({
	createUser : function(data){

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
	sendEmail : function(data){
		
		data.emitter = Users.findOne(data.emitter); 
		data.receiver = Users.findOne(data.receiver);
		var relation = Relations.findOne({
			emitter : data.emitter._id,
			receiver : data.receiver._id
		});
		
		if(!relation){
			throw new Meteor.Error("The relation doesn't exist", {
				data : data
			});	
		}
		
		relation.audio = Audios.link(Audios.collection.findOne(relation.audio));
		if (Meteor.isServer) {
			data = {
				from: "thelovebot@ogre.be",
				to: data.receiver.email,
				replyTo : data.emitter.email,
				subject: "The LOVEBOT match",
				html: Handlebars.templates.mail({
					receiver: data.receiver.firstname.capitalizeFirstLetter(),
					emitter : {
						email : data.emitter.email, 
						name : data.emitter.firstname.capitalizeFirstLetter()
					},
					audio : relation.audio
				})
			};
			Email.send(data);
		}
	}
})