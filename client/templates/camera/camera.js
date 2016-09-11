var videoCanvas, videoContext;
var audioRecorder, audioContext;

function supportsMedia() {
	return !!(	navigator.getUserMedia || navigator.webkitGetUserMedia ||
				navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

// cross-browser support for getUserMedia
navigator.getUserMedia = 	navigator.getUserMedia ||
							navigator.webkitGetUserMedia ||
							navigator.mozGetUserMedia ||
							navigator.msGetUserMedia;

window.URL = 	window.URL || 
				window.webkitURL;

window.requestAnimationFrame = (function () {
    return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame
})();

var mediaStream;
// global variables for recording audio
var audioContext;
var audioRecorder;

// function for requesting the media stream
function setupMedia() {
	if (supportsMedia()) {
		audioContext = new AudioContext();
 
		navigator.getUserMedia({
			video: true,
			audio: true
		}, function (localMediaStream) {
			// map the camera
			document.getElementById('live_video').hidden = true;
			document.getElementById('media-error').hidden = true;
			
			var video = document.getElementById('live_video');
			video.src = window.URL.createObjectURL(localMediaStream);
			// create the canvas & get a 2d context
			videoCanvas = document.createElement('canvas');
			videoContext = videoCanvas.getContext('2d');

			// setup audio recorder
			var audioInput = audioContext.createMediaStreamSource(localMediaStream);
			//audioInput.connect(audioContext.destination);
			// had to replace the above with the following to
			// mute playback (so you don't get feedback)
			var audioGain = audioContext.createGain();
			audioGain.gain.value = 0;
			audioInput.connect(audioGain);
			audioGain.connect(audioContext.destination);
			
			audioRecorder = new Recorder(audioInput);
            mediaStream = localMediaStream;
			
		}, function (e) {
			console.log('web-cam not initialized: ', e);
			document.getElementById('media-error').hidden = false;
		});


    }
};

Template.camera.helpers({
	supportsMedia : supportsMedia,
	onLoad : setupMedia,
});

window.recordAudio = function(callback, update){
	audioRecorder.record();
	var t0 = new Date().getTime();
	var time = setInterval(function(){
		if(_.isFunction(update)){
			var currentTime = new Date().getTime() - t0;
			update(currentTime, currentTime / Session.get(Meteor.RECORDTIME) * 100.0);
		}
	}, 20);
	setTimeout(function(){
		audioRecorder.stop();
		audioRecorder.exportWAV(function (audioBlob) {
			audioBlob.lastModifiedDate = new Date();
			audioBlob.name = (new Date().getTime())+".wav";
			return callback(null, audioBlob);
		});
		clearInterval(time);
	}, Session.get(Meteor.RECORDTIME));
}

window.savePicture = function(callback){
	var video = document.getElementById('live_video');
	var logo = document.getElementById('logo');
	videoCanvas.width = video.width;
	videoCanvas.height = video.height;
	
	videoContext.translate(videoCanvas.width / 2, videoCanvas.height / 2);
	videoContext.scale(-1, 1);
	videoContext.translate(-videoCanvas.width / 2, -videoCanvas.height / 2);
	videoContext.drawImage(video, 0, 0, video.width, video.height);

	

	videoCanvas.toBlob(function(blob){
		blob.lastModifiedDate = new Date();
		blob.name = (new Date().getTime())+".jpg";

		Resizer.resize(blob, {width: 600, height: 600, cropSquare: true}, function(err, file) {
			if(err)return console.log(err);
			file.lastModifiedDate = new Date();
			file.name = (new Date().getTime())+".jpg";
			callback(null, file);	
		});
		
	}, 'image/jpeg', 0.95);
}