"use strict";
/*global $ : false */
/*global Hammer : false */
/*global Meteor : false */
/*global Session : false */
/*global Template : false */



Template.layout.rendered = function(){
	
	$(document).off('keyup', Meteor.resetTimeoutFnc);
};