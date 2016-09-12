
Meteor.PICTURE			= "picture";
Session.setDefault(Meteor.PICTURE, false);

Meteor.PICTUREID			= "pictureId";
Session.setDefault(Meteor.PICTUREID, false);


Meteor.ACTIVETIMEOUT			= "activeTimeout";
Session.setDefault(Meteor.ACTIVETIMEOUT, 1000000);


Meteor.TIMEOUT			= "timeout";
Session.setDefault(Meteor.TIMEOUT, 5000);

Meteor.TIMER			= "timer";
Session.setDefault(Meteor.TIMER, Session.get(Meteor.TIMEOUT));

Meteor.USERID			= "userId";
Session.setDefault(Meteor.USERID, false);

Meteor.USER			= "user";
Session.setDefault(Meteor.USER, false);

Meteor.LIKE			= "like";
Session.setDefault(Meteor.LIKE, -1);

Meteor.MATCHID		= "matchId";
Session.setDefault(Meteor.MATCHID, false);

Meteor.MATCH		= "match";
Session.setDefault(Meteor.MATCH, false);

Meteor.MATCHPICTURE			= "matchPicture";
Session.setDefault(Meteor.MATCHPICTURE, false);

Meteor.RECORDTIME			= "recordTime";
Session.setDefault(Meteor.RECORDTIME, 5000);
