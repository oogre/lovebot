import { Meteor } from 'meteor/meteor';

var Dropbox, client;
Meteor.startup(function () {


	if(Users.find().count() == 0){
		Images.addFile(process.env.PWD+"/public/lovebot.jpg", {
			fileName: 'thelovebot.jpg',
			type: 'image/jpeg',
			meta: {}
		}, function(error, picture){
			if(error)return console.log(error);
			Audios.addFile(process.env.PWD+"/public/lovebot.ogg", {
				fileName: 'lovebot.ogg',
				type: 'audio/ogg',
				meta: {}
			}, function(error, audio){
				if(error)return console.log(error);
				var userId = Users.insert({
					firstname : "branigan",
					lastname : "love",
					email : "thelovebot@ogre.be",
					picture : picture._id,
					lovebot : 1
				});
				Relations.insert({
					emitter : userId,
					audio : audio._id,
					lovebot : 1
				});
			});
		});
	}
});