var currentUpload;
Template.start.events = {
	'click button.next': function (e) {
		$("#audioClicPhoto").trigger("play");
		var file = window.savePicture(function(err, file){
			if(err)return console.log(err);
			var upload = Images.insert({
				file: file,
				streams: 'dynamic',
				chunkSize: 'dynamic'
			}, false);


			upload.on('start', function () {
				currentUpload.set(0);
			});
			upload.on('progress', function (progress) {
				currentUpload.set({progress : progress});
			});

			upload.on('end', function (error, fileObj) {
				if (error) {
					console.log(error);
				} else {
					setTimeout(function(){
						Session.set(Meteor.PICTURE, Images.link(Images.collection.findOne(fileObj._id)));
						Session.set(Meteor.PICTUREID, fileObj._id);
						Router.go("pictValidation");
					}, 20);
					
					//
				}
			});
			upload.start();
		});
    }
};

Template.start.onCreated(function () {
  currentUpload = new ReactiveVar(false);
});

Template.start.helpers({
	currentUpload: function () {
		return currentUpload.get();
	}
});