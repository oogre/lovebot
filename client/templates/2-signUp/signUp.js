var counter = 0;
Template.signUp.glitch = function(){
	var elem= $(".user-picture");
	elem
	.glitch({
		amount: Math.floor(Math.random()*7),
		complete : function(canvas){
			elem.css({
				"backgroundImage" : "url("+canvas.toDataURL("image/jpeg", 0.5)+")"
			});
		}
	});
}
Template.signUp.next = function(data){
	$("#audioClick1").prop("currentTime",0).trigger("play");
	
	Meteor.call("findOrCreateUser", data, function(error, _id){
		if(error){
			return console.log(error);
		}
		Session.set(Meteor.USER, {_id : _id});
		setTimeout(function(){
			Router.go("match");
		}, 1000)
	});
}
Template.signUp.helpers({
	picture : function(){
		if (Session.equals(Meteor.PICTURE, false)){
			Router.go("start");
		}
		return Session.get(Meteor.PICTURE);
	}
});

function checkInput(target){
	target = $(target);
	if(target.attr("name") == "email"){
		if(! Match.test(target.val(), Meteor.ValidEmail)){
			target.parent().addClass("error").removeClass("success");
			return false;
		}else{
			target.parent().removeClass("error").addClass("success");
			return true;
		}	
	}
	else if (target.attr("name") == "checkin"){
		if(target[0].checked){
			target.parent().removeClass("error").addClass("success");
			return true;
		}else{
			target.parent().addClass("error").removeClass("success");
			return false;
		}
	}
	else{
		if(! Match.test(target.val(), Meteor.NonEmptyString)){
			target.parent().addClass("error").removeClass("success");
			return false;
		}else{
			target.parent().removeClass("error").addClass("success");
			return true;
		}	
	}
};

Template.signUp.events = {
	"change input[type=radio]" : function () {
		$("#audioClick3").prop("currentTime",0).trigger("play");
		Template.signUp.glitch();
	},
	"change select" : function (e) {
		$("#audioClick3").prop("currentTime",0).trigger("play");
		$(e.target).css({
			"color": "rgba(255, 255, 255, 1)"	
		});
		Template.signUp.glitch();
		
	},
	'change input[type=checkbox]': function (e) {
		$("#audioClick3").prop("currentTime",0).trigger("play");

		var target = $(e.target);
		checkInput(target);

		
		Template.signUp.glitch();
		if($(".success input:not([type=submit]):not([type=radio])").length == $("input:not([type=submit]):not([type=radio])").length)
		{
			$("input[type=submit]").removeClass("disabled").removeAttr("disabled");
		}
		else{
			$("input[type=submit]").addClass("disabled").attr("disabled", "disabled");
		}
	},
	'blur input:not([type=submit])': function (e) {
		if(counter++ %3==0){
			Template.signUp.glitch();
		}
		var target = $(e.target);
		
		checkInput(target);

		if($(".success input:not([type=submit]):not([type=radio])").length == $("input:not([type=submit]):not([type=radio])").length)
		{
			$("input[type=submit]").removeClass("disabled").removeAttr("disabled");
		}
		else{
			$("input[type=submit]").addClass("disabled").attr("disabled", "disabled");
		}
	},
	"submit form" : function(e){
		var data = {
			firstname : e.target.firstname.value,
			email : e.target.email.value,
			picture : Session.get(Meteor.PICTUREID),
			gender : e.target.gender.value,
			sex : e.target.sex.value,
			age : e.target.age.value
		};
		
		if( Match.test(data.firstname, Meteor.NonEmptyString) &&
			Match.test(data.email, Meteor.ValidEmail)
		) {
			Template.signUp.next(data);
		}
		return false;
	}
};

Template.signUp.rendered = function(){
	counter = 0;
	$(".container.main")
	.addClass("fixe")
	.css({
		"background": "none",
		"opacity": 1 
	});
	var audios = $("#signUp #keyboardSounds audio");
	Meteor.keyboard = $("input:not([type=submit]):not([type=checkbox]):not([type=radio])").keyboard({
		display: {
			'bksp'   : '\u2190',
			'enter'  : 'return',
			'normal' : 'ABC',
			'meta1'  : '.?123',
			'meta2'  : '#+=',
			'accept' : '\u21d3'
		},

		layout: 'custom',
		customLayout: {
			'normal': [
				'a z e r t y u i o p {bksp}',
				'q s d f g h j k l {enter}',
				'{s} w x c v b n m @ . {s}',
				'{meta1} {space} _ -'
			],
			'shift': [
				'A Z E R T Y U I O P {bksp}',
				'Q S D F G H J K L {enter}',
				'{s} W X C V B N M @ . {s}',
				'{meta1} {space} _ -'
			],
			'meta1': [
				'1 2 3 4 5 6 7 8 9 0 {bksp}',
				'` | { } % ^ * / \' {enter}',
				'{meta2} \u20ac & ~ # = + . {meta2}',
				'{normal} {space} ! ?'
			],
			'meta2': [
				'[ ] { } \u2039 \u203a ^ * " , {bksp}',
				'\\ | / < > \u20ac \u00a3 \u00a5 \u2022 {enter}',
				'{meta1} $ & ~ # = + . {meta1}',
				'{normal} {space} ! ?'
			]
		},
		usePreview : false,
		autoAccept : true,
		position : {
			// optional - null (attach to input/textarea) or a jQuery object
			// (attach elsewhere)
			of : null,
			my : 'center bottom',
			at : 'center bottom',
			// used when "usePreview" is false
			// (centers keyboard at bottom of the input/textarea)
			at2: 'center bottom'
		},
		change: function(e, keyboard, el, txt) {
			var current = $(audios.get(e.action.charCodeAt(0)%audios.length));
			current.prop("currentTime",0).trigger("play");
			Meteor.resetTimeoutFnc();
			return txt;
		},
		visible : function(){
			Meteor.resetTimeoutFnc();
		}
	}).getkeyboard();
};