"use strict";
/*global $ : false */
/*global Hammer : false */
/*global Meteor : false */
/*global Session : false */
/*global Template : false */

var timeout, tic, progressBar;


Template.timeoutModal.rendered = function(){
	$(document).on('keyup', Meteor.resetTimeoutFnc);
	$('#timeoutModal')
	.on('show.bs.modal', function(e){
		$("#audioError").prop("currentTime",0);
		$("#audioError").trigger('play');
	})
	.on('shown.bs.modal', function (e) {

		timeout = setTimeout(function(){
			$('#timeoutModal').modal('hide');
			setTimeout(function(){
				$("#alertModal")
				.off('hidden.bs.modal')
				.modal("hide");
				Meteor.reload();
			}, 750);	
		}, Session.get(Meteor.TIMEOUT));
		tic = setInterval(function(){
			Session.set(Meteor.TIMER, Session.get(Meteor.TIMER)-20)
		}, 20);
	})
	.on('hidden.bs.modal', function (e) {
		$("#audioError").trigger('pause');
		clearTimeout(timeout);
		clearInterval(tic);
		timeout = tic = undefined;
		Meteor.resetTimeoutFnc();
	});
	progressBar = $("#progressBar");
};

Template.timeoutModal.helpers({
	timer : function(){
		var time = Session.get(Meteor.TIMER);
		var max = Session.get(Meteor.TIMEOUT);
		var ratio = (time / max) * 100;
		if(progressBar){
			progressBar
			.attr("aria-valuenow", ratio)
			.css({
				width : ratio+"%"
			});
		}
		var txt = Math.round(time/1000);
		if(txt>1){
			return txt+" secondes";
		}else{
			return txt+" seconde";
		}
	}
});

Template.timeoutModal.events({
	"click #timeoutModal button" : function(){
		$('#timeoutModal').modal('hide');
		return false;
	}
});