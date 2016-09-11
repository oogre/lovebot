Template.listenTo.events = {
	'click button.play': function (e) {
		$(e.target).addClass("glow");
		$("#audioMatch").trigger('play');
		$("#audioMatch").get(0).addEventListener('ended', function(){
			$(e.target).removeClass("glow");
			Router.go("confirm");
		});
	}
}