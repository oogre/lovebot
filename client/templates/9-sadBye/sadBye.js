Template.sadBye.rendered = function(){
	$("audio.loop").trigger("pause");
	$("#audio3").get(0).addEventListener('ended', function(){
		Meteor.reload();
	});
};

Template.sadBye.events({
	"click button" : function(){
		Meteor.reload("snapPicture");
		return false;
	}
});