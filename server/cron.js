Meteor.startup(function () {
	
	SyncedCron.add({
		name: "MailSender",
		schedule: function(parser) {
			return parser.text('every 1 minute');
		},
		job: function() {
			Jobs.find({
				name : "sendEmail",
				done : 0,
				data : { $exists : 1 }
			})
			.fetch()
			.map(function(job){
				switch(job.data.template){
					case "participation_mail" : 
						var receiver = Users.findOne(job.data.to);
						if(receiver){
							var data = {
								from: process.env.MAIL_LOVEBOT,
								to: receiver.email,
								subject: "Bienvenue au LoveBot Club",
								html: Handlebars.templates[job.data.template]({
									firstname : receiver.firstname.capitalizeFirstLetter()
								})
							};
							try{
								Email.send(data);
								Jobs.update(job._id, {
									$set : {
										done : 1
									}
								});
								console.log("WelcomMail sent to : " + receiver.email);
							}catch(error){
								Jobs.update(job._id, {
									$set : {
										done : -1,
										error :  "unable to send mail to : "+receiver.email
									}
								});
								console.error("WelcomMail failed to : " + receiver.email);
							}
						}
						else{
							Jobs.update(job._id, {
								$set : {
									done : -1,
									error : "unknown receiver"
								}
							});
						}
					break;
					case "notification_mail" : 
						var user1 = Users.findOne(job.data.user1);
						var user2 = Users.findOne(job.data.user2);
						var user3 = Users.findOne(job.data.user3);
						if(user1 && user2 && user3)
						{
							user1.picture = Images.findOne(user1.picture);
							if(		user1.picture && 
									user1.picture.versions && 
									user1.picture.versions.original && 
									user1.picture.versions.original.meta && 
									user1.picture.versions.original.meta.pipeFrom)
							{
								var data = {
									from: process.env.MAIL_LOVEBOT,
									to: user2.email,
									subject: "Quelqu'un s’intéresse à vous",
									html: Handlebars.templates[job.data.template]({
										user1 : {
											picture : user1.picture.versions.original.meta.pipeFrom
										},
										user2 : {
											firstname : user2.firstname.capitalizeFirstLetter()
										},
										user3 : {
											firstname : user3.firstname.capitalizeFirstLetter()
										}
									})
								};
								try{
									Email.send(data);
									Jobs.update(job._id, {
										$set : {
											done : 1
										}
									});
									console.log("NotificationMail sent to : " + user2.email);
								}catch(error){
									Jobs.update(job._id, {
										$set : {
											done : -1,
											error :  "unable to send mail to : "+user2.email
										}
									});
									console.error("NotificationMail failed to : " + user2.email);
								}	
							}else{
								console.log("Picture's not ready to be sent to" + user2.email);
							}
						}
						else
						{
							Jobs.update(job._id, {
								$set : {
									done : -1,
									error : "unknown user1 or user2 or user3"
								}
							});
						}
					break;
					case "match_mail" : 
						var user1 = Users.findOne(job.data.user1);
						var user2 = Users.findOne(job.data.user2);
						var audio = Audios.findOne(job.data.audio);
						if(user1 && user2 && audio)
						{
							user1.picture = Images.findOne(user1.picture);
							if(		user1.picture && 
									user1.picture.versions && 
									user1.picture.versions.original && 
									user1.picture.versions.original.meta && 
									user1.picture.versions.original.meta.pipeFrom && 
									audio.versions && 
									audio.versions.original && 
									audio.versions.original.meta && 
									audio.versions.original.meta.pipeFrom)
							{
								var data = {
									from: process.env.MAIL_LOVEBOT,
									to: user2.email,
									replyTo : user1.email,
									subject: "Quelqu'un aimerait vous rencontrer",
									html: Handlebars.templates[job.data.template]({
										user1 : {
											firstname : user1.firstname.capitalizeFirstLetter(),
											picture : user1.picture.versions.original.meta.pipeFrom
										},
										user2 : {
											firstname : user2.firstname.capitalizeFirstLetter(),
											creationDate : moment(user2.createdAt).format("DD/MM/YYYY à HH:mm:ss")
										},
										audio : audio.versions.original.meta.pipeFrom
									})
								};
								try{
									Email.send(data);
									Jobs.update(job._id, {
										$set : {
											done : 1
										}
									});
									console.log("MatchMail sent to : " + user2.email);
								}catch(error){
									Jobs.update(job._id, {
										$set : {
											done : -1,
											error :  "unable to send mail to : "+user2.email
										}
									});
									console.error("MatchMail failed to : " + user2.email);
								}	
							}else{
								console.log("Picture or Audio is/are not ready to be sent to" + user2.email);
							}
						}
						else
						{
							Jobs.update(job._id, {
								$set : {
									done : -1,
									error : "unknown user1 or user2 or user3"
								}
							});
						}
					break;
				}

			});
		}
	});

	SyncedCron.start();
});