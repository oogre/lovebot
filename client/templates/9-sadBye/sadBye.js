Template.sadBye.rendered = function(){
	$("audio.loop").trigger("pause");
	setTimeout(function(){
		Meteor.reload();
	}, 15000);


};