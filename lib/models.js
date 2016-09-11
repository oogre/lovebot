
Images = new FilesCollection({
	collectionName: 'images',
	downloadRoute: '/',
	allowClientCode: true, // Disallow remove files from Client
	storagePath : process.env.PWD+"/uploads/images",
	onBeforeUpload: function (file) {
		// Allow upload files under 10MB, and only in png/jpg/jpeg formats
		if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
			return true;
		} else {
			return 'Please upload image, with size equal or less than 10MB';
		}
	}
});
if (Meteor.isServer) {
	Meteor.publish('files.images.all', function () {
		return Images.find().cursor;
	});
} else {
	Meteor.subscribe('files.images.all');
}





Audios = new FilesCollection({
	collectionName: 'audios',
	downloadRoute: '/',
	allowClientCode: true, // Disallow remove files from Client
	storagePath : process.env.PWD+"/uploads/audios",
	onBeforeUpload: function (file) {
		// Allow upload files under 10MB, and only in png/jpg/jpeg formats
		if (file.size <= 10485760 && /wav|mp3|ogg/i.test(file.extension)) {
			return true;
		} else {
			return 'Please upload audio, with size equal or less than 10MB';
		}
	}
});

if (Meteor.isServer) {
	Meteor.publish('files.audios.all', function () {
		return Audios.find().cursor;
	});
} else {
	Meteor.subscribe('files.audios.all');
}







Users = new Meteor.Collection("users");
if (Meteor.isServer) {
	Meteor.publish('users.all', function () {
		return Users.find();
	});
} else {
	Meteor.subscribe('users.all');
}
/*
{
	_id
	firstname STRING
	email STRING
	picture STRING
}
*/






Relations = new Meteor.Collection("relations");
if (Meteor.isServer) {
	Meteor.publish('relations.all', function () {
		return Relations.find();
	});
} else {
	Meteor.subscribe('relations.all');
}
/*
{
	_id
	emitter user_id
	receiver user_id
	like boolean
	audio
}
*/