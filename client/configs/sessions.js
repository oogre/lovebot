
Meteor.PICTURE			= "picture";
Session.setDefault(Meteor.PICTURE, false);

Meteor.CAM_READY			= "camReady";
Session.setDefault(Meteor.CAM_READY, false);

Meteor.PICTUREID			= "pictureId";
Session.setDefault(Meteor.PICTUREID, false);


Meteor.ACTIVETIMEOUT			= "activeTimeout";
Session.setDefault(Meteor.ACTIVETIMEOUT, 150000);


Meteor.TIMEOUT			= "timeout";
Session.setDefault(Meteor.TIMEOUT, 8000);

Meteor.TIMER			= "timer";
Session.setDefault(Meteor.TIMER, Session.get(Meteor.TIMEOUT));

Meteor.USER			= "user";
Session.setDefault(Meteor.USER, {});

Meteor.USER_2		= "user2";
Session.setDefault(Meteor.USER_2, {});

Meteor.USER_3		= "user3";
Session.setDefault(Meteor.USER_3, {});

Meteor.MATCH		= "match";
Session.setDefault(Meteor.MATCH, {});

Meteor.LIKE			= "like";
Session.setDefault(Meteor.LIKE, -1);

Meteor.RECORDTIME			= "recordTime";
Session.setDefault(Meteor.RECORDTIME, 10000);


