var Dropbox, client, bound, Request, fs;
if (Meteor.isServer) {
	
	Dropbox = Npm.require('dropbox');
  	Request = Npm.require('request');
  	fs = Npm.require('fs');
  	bound = Meteor.bindEnvironment(function(callback) {
		return callback();
	});

	client = new Dropbox.Client({
		key: process.env.DROPBOX_KEY,
		secret: process.env.DROPBOX_SECRET,
		token: process.env.DROPBOX_TOKEN
	});
}
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
	},
	onAfterUpload: function(fileRef) {
		// In onAfterUpload callback we will move file to DropBox
		var self = this;
		var makeUrl = function(stat, fileRef, version, triesUrl) {
			if (triesUrl == null) {
				triesUrl = 0;
			}
			client.makeUrl(stat.path, {
				long: true,
				downloadHack: true
			}, function(error, xml) {
			// Store downloadable link in file's meta object
				bound(function() {
					if (error) {
						if (triesUrl < 10) {
							Meteor.setTimeout(function() {
								makeUrl(stat, fileRef, version, ++triesUrl);
							}, 2048);
						} else {
							console.error(error, {
								triesUrl: triesUrl
							});
						}
					} else if (xml) {
						var upd = {
							$set: {}
						};
						upd['$set']["versions." + version + ".meta.pipeFrom"] = xml.url;
						upd['$set']["versions." + version + ".meta.pipePath"] = stat.path;
						self.collection.update({
							_id: fileRef._id
						}, upd, function(error) {
							if (error) {
								console.error(error);
							} else {
								// Unlink original files from FS
								// after successful upload to DropBox
								//self.unlink(self.collection.findOne(fileRef._id), version);
								console.log("PICT UPLOADED");
							}
						});
					} else {
						if (triesUrl < 10) {
							Meteor.setTimeout(function() {
								makeUrl(stat, fileRef, version, ++triesUrl);
							}, 2048);
						} else {
							console.error("client.makeUrl doesn't returns xml", {
								triesUrl: triesUrl
							});
						}
					}
				});
			});
		};

		var writeToDB = function(fileRef, version, data, triesSend) {
		// DropBox already uses random URLs
		// No need to use random file names
			if (triesSend == null) {
				triesSend = 0;
			}
			client.writeFile(fileRef._id + "-" + version + "." + fileRef.extension, data, function(error, stat) {
				bound(function() {
					if (error) {
						if (triesSend < 10) {
							Meteor.setTimeout(function() {
								writeToDB(fileRef, version, data, ++triesSend);
							}, 2048);
						} else {
							console.error(error, {
								triesSend: triesSend
							});
						}
					} else {
						// Generate downloadable link
						makeUrl(stat, fileRef, version);
					}
				});
			});
		};

		var readFile = function(fileRef, vRef, version, triesRead) {
			if (triesRead == null) {
				triesRead = 0;
			}
			fs.readFile(vRef.path, function(error, data) {
				bound(function() {
					if (error) {
						if (triesRead < 10) {
							readFile(fileRef, vRef, version, ++triesRead);
						} else {
							console.error(error);
						}
					} else {
						writeToDB(fileRef, version, data);
					}
				});
			});
		};

		var sendToStorage = function(fileRef) {
			_.each(fileRef.versions, function(vRef, version) {
				readFile(fileRef, vRef, version);
			});
		};

		sendToStorage(fileRef);
	}
}) ;
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
	},
	onAfterUpload: function(fileRef) {
		// In onAfterUpload callback we will move file to DropBox
		var self = this;
		var makeUrl = function(stat, fileRef, version, triesUrl) {
			if (triesUrl == null) {
				triesUrl = 0;
			}
			client.makeUrl(stat.path, {
				long: true,
				downloadHack: true
			}, function(error, xml) {
			// Store downloadable link in file's meta object
				bound(function() {
					if (error) {
						if (triesUrl < 10) {
							Meteor.setTimeout(function() {
								makeUrl(stat, fileRef, version, ++triesUrl);
							}, 2048);
						} else {
							console.error(error, {
								triesUrl: triesUrl
							});
						}
					} else if (xml) {
						var upd = {
							$set: {}
						};
						upd['$set']["versions." + version + ".meta.pipeFrom"] = xml.url;
						upd['$set']["versions." + version + ".meta.pipePath"] = stat.path;
						self.collection.update({
							_id: fileRef._id
						}, upd, function(error) {
							if (error) {
								console.error(error);
							} else {
								// Unlink original files from FS
								// after successful upload to DropBox
								//self.unlink(self.collection.findOne(fileRef._id), version);
								console.log("AUDIO UPLOADED");
							}
						});
					} else {
						if (triesUrl < 10) {
							Meteor.setTimeout(function() {
								makeUrl(stat, fileRef, version, ++triesUrl);
							}, 2048);
						} else {
							console.error("client.makeUrl doesn't returns xml", {
								triesUrl: triesUrl
							});
						}
					}
				});
			});
		};

		var writeToDB = function(fileRef, version, data, triesSend) {
		// DropBox already uses random URLs
		// No need to use random file names
			if (triesSend == null) {
				triesSend = 0;
			}
			client.writeFile(fileRef._id + "-" + version + "." + fileRef.extension, data, function(error, stat) {
				bound(function() {
					if (error) {
						if (triesSend < 10) {
							Meteor.setTimeout(function() {
								writeToDB(fileRef, version, data, ++triesSend);
							}, 2048);
						} else {
							console.error(error, {
								triesSend: triesSend
							});
						}
					} else {
						// Generate downloadable link
						makeUrl(stat, fileRef, version);
					}
				});
			});
		};

		var readFile = function(fileRef, vRef, version, triesRead) {
			if (triesRead == null) {
				triesRead = 0;
			}
			fs.readFile(vRef.path, function(error, data) {
				bound(function() {
					if (error) {
						if (triesRead < 10) {
							readFile(fileRef, vRef, version, ++triesRead);
						} else {
							console.error(error);
						}
					} else {
						writeToDB(fileRef, version, data);
					}
				});
			});
		};

		var sendToStorage = function(fileRef) {
			_.each(fileRef.versions, function(vRef, version) {
				readFile(fileRef, vRef, version);
			});
		};

		sendToStorage(fileRef);
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


Jobs = new Meteor.Collection("jobs");
if (Meteor.isServer) {
	Meteor.publish('jobs.all', function () {
		return Jobs.find();
	});
} else {
	//Meteor.subscribe('jobs.all');
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