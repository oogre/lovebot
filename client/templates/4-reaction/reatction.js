var openModal = function(e){
	Template.confirmModal.openAlertModal(null, "Votre spontanéité est votre plus belle qualité!", "blue");
};

var playFlag = false;
var confirmFlag = false;
var confFlag = true;
var sendItFlag = false;
var tchataudio;

Template.reaction.glitch = function(){
	var elem= $(".matched-user-picture");
	elem
	.glitch({
		amount: Math.floor(Math.random()*7),
		complete : function(canvas){
			elem.css({
				"backgroundImage" : "url("+canvas.toDataURL("image/jpeg", 0.5)+")"
			});
		}
	});
}

var superFnc = function(){
	var currentRow = $("#reaction .tchat .row:not(:visible)").first();
	var children = currentRow.find("ul>li");
	var currentChild = $(children.get(0));
	currentChild.show();
	currentRow.slideDown(function(){
		action(currentChild.attr("data-action"));
	});
	tchataudio.prop("currentTime",0).trigger("play");
	
	var time=0;
	children.each(function(index, elem){
		var currentChild = $(elem);
		var nextChild = $(children.get(index+1));
		var t = parseInt(currentChild.attr("data-time")) || 0;
		if(t>0){
			time+=t;
			setTimeout(function(){
				if(nextChild.length > 0){
					nextChild.slideDown(function(){
						action(nextChild.attr("data-action"));
					});
					tchataudio.prop("currentTime",0).trigger("play");
				}else{
					superFnc();
				}
			}, time);
		}else{
			action(nextChild.attr("data-action"));
		}
	});
};
var action = function(method){
	var t ;
	switch(method){
		case "record":
			setTimeout(function(){
				Meteor.resetTimeoutFnc();
				$("#cling").prop("currentTime",0).trigger("play");
				recordAudio(superFnc);
			}, 1000);
		break;
		case "play":
			t = setInterval(function(){
					if(playFlag){
						Meteor.resetTimeoutFnc();
						superFnc();
						clearInterval(t);
					}
				}, 200);
		break;
		case "confirmation" : 
			t = setInterval(function(){
					if(confirmFlag){
						$("#tictac").trigger("pause");
						Meteor.resetTimeoutFnc();
						$("#click1").prop("currentTime",0).trigger("play");
						superFnc();
						clearInterval(t);
					}else if(confFlag){
						confFlag= false;
						$("#tictac").prop("currentTime",0).trigger("play");
					}
				}, 200);
		break;
		case "sendIt" : 
			t = setInterval(function(){
					if(sendItFlag){
						Meteor.resetTimeoutFnc();
						new Processing($("#heartAttack").show().get(0), window.sketch);
						superFnc();
						clearInterval(t);
					}
				}, 200);
		break;
		case "reload" : 
			setTimeout(function(){
				Meteor.reload();
			}, 10000);
		break;
		case "pauseTheLoop" : 
			$("audio.loop").trigger("pause");
		break;
	}
}

var recordAudio = function(callback){
	$("audio.loop").trigger("pause");
	$(".glyphicon.record.danger").addClass("glow");
	window.recordAudio(function(err, file){
		if(err)return console.log(err);
		var upload = Audios.insert({
			file: file,
			streams: 'dynamic',
			chunkSize: 'dynamic'
		}, false);

		upload.on('start', function () {
			//currentUpload.set(0);
		});
		upload.on('progress', function (progress) {
			//currentUpload.set({progress : progress});
		});

		upload.on('end', function (error, fileObj) {
			if (error) {
				console.log(error);
			} else {

				var data = {
					emitter : Session.get(Meteor.USER)._id,
					receiver : Session.get(Meteor.USER_2)._id,
					audio : fileObj._id
				}
				$(".glyphicon.record.danger").removeClass("glow");
				setTimeout(function(){
					Meteor.call("updateRelationWithAudio", data, function(err, data){
						if(err)return console.log(err);
						console.log(data);
					});
				}, 20);

				$("#confirmModal")
				.find("img[src='alert.png']")
				.attr("src", "icone_son.png")
				.end()
				.find(".btn.yes")
				.html("Merci")
				.end()
				.modal({
					backdrop: 'static',
		  			keyboard: false
				})
				.modal("show")
				.one('hidden.bs.modal', function (event) {
					
				})
				.find(".no").one("click", openModal).end()
				.find(".yes").one("click", function(e){
					$("#confirmModal").find(".no").off("click", openModal);
					$("audio.loop").trigger("play");
					callback();
				}).end()
				.find(".message")
				.html("Votre message a été enregistré avec succès")
				.end();
			}
		});
		upload.start();
	}, function(time, percent){
		$("#reaction .recorder .time").html(Math.round(time/1000));
		$("#reaction .recorder .progress-bar").css({width : percent+"%"});
	});
};

Template.reaction.rendered = function(){
	tchataudio = $(".tchat audio#ploc");


	$(".container.main")
	.addClass("fixe");
	$(".matched-user-picture")
	.css({
		"backgroundImage": "url("+Session.get(Meteor.USER_2).picture+")",
	});

	$(".banner").slideDown(function(){
		superFnc();	
		Template.reaction.glitch();
	}).find("audio").prop("currentTime",0).trigger("play");
	setTimeout(function(){
		$(".banner").slideUp();
		Template.reaction.glitch();
	}, 7000);
}

Template.reaction.helpers({
	userFirstname : function(){
		return Session.get(Meteor.USER).firstname;
	},
	userPicture : function(){
		return Session.get(Meteor.USER).picture;
	},
	user2Firstname : function(){
		return Session.get(Meteor.USER_2).firstname;	
	},
	user2Picture : function(){
		return Session.get(Meteor.USER_2).picture;
	},
	user3Firstname : function(){
		return Session.get(Meteor.USER_3).firstname;
	},
	user3Picture : function(){
		return Session.get(Meteor.USER_3).picture;
	},
	matchAudio : function(){
		return Session.get(Meteor.MATCH).audio;
	},
	width : function(){
		return $(document).width();
	},
	height : function(){
		return $(document).height();
	},
	yes : function(){
		return Session.get(Meteor.LIKE) ? "yes" : "no";
	},
	no : function(){
		return Session.get(Meteor.LIKE) ? "no" : "yes";
	}
});

Template.reaction.events = {
	'click .btn.play': function (e) {
		$("audio.loop").trigger("pause");
		Meteor.resetTimeoutFnc();
		$(".btn.play").removeClass("play");
		$("#confirmModal")
		.modal({
			backdrop: 'static',
  			keyboard: false
		})
		.modal("show")
		.one('hidden.bs.modal', function (event) {
		})
		.find(".no").one("click", function(e){
			$("#confirmModal").modal("hide");
			$("audio.loop").trigger("play");
			playFlag = true;
		}).end()
		.find(".btn.yes")
		.html("Oui")
		.end()
		.find(".btn.no")
		.html("Non")
		.end()
		.find(".yes").one("click", function(e){
			$(".glyphicon.glyphicon-play").addClass("glow");
			$("#audioMatch").trigger('play');
			var t0 = new Date().getTime();
			var time = setInterval(function(){
				var currentTime = new Date().getTime() - t0;
				$("#reaction .player .time").html(Math.round(currentTime / 1000));
				var duration = document.getElementById("audioMatch").duration * 1000;
				$("#reaction .player .progress-bar").css({width : currentTime / duration * 100.0+"%"});
			}, 20);
			$("#audioMatch").get(0).addEventListener('ended', function(){
				clearInterval(time);
				$("audio.loop").trigger("play");
				$(".glyphicon.glyphicon-play").removeClass("glow");
				playFlag = true;
			});
		})	
		.end()
		.find(".message")
		.html("Si vous écoutez cet enregistrement le love bot enverra une notification à "+Session.get(Meteor.MATCH).firstname+". Souhaitez-vous poursuivre?");
	},
	'click .btn.yes': function (e) {
		var data = {
			emitter : Session.get(Meteor.USER)._id,
			receiver : Session.get(Meteor.USER_2)._id,
			like : true
		}
		Meteor.call("upsertRelation", data);
		Meteor.resetTimeoutFnc();
		confirmFlag = true;
	},
	'click .btn.no': function (e) {
		var data = {
			emitter : Session.get(Meteor.USER)._id,
			receiver : Session.get(Meteor.USER_2)._id,
			like : false
		}
		Meteor.call("upsertRelation", data);
		Meteor.resetTimeoutFnc();
		Router.go("sadBye");
	},
	'click .btn.yesyes': function (e) {
		$("audio.loop").trigger("pause");
		$("#happy").prop("currentTime",0).trigger("play");
		$("#yeah").prop("currentTime",0).trigger("play");

		Meteor.resetTimeoutFnc();
		$(".btn.yesyes").removeClass("yesyes");
		sendItFlag = true;
		Meteor.call("sendEmail", {
			emitter : Session.get(Meteor.USER)._id,
			receiver : Session.get(Meteor.USER_2)._id,
		});
	},
	'click .btn.nono': function (e) {
		$("#timeout").prop("currentTime",0).trigger("play");
		setTimeout(function(){
			Meteor.resetTimeoutFnc();
			Router.go("sadBye");
		}, 1000);
		Meteor.resetTimeoutFnc();
		
	}
};