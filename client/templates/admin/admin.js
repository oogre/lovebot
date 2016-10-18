Template.admin.helpers({
});

Template.buttondestroy.events({
	"click button.btn-danger" : function(event){
		if(window.prompt("Ecrivez \"SUPPRIMER\" : ")==="SUPPRIMER"){
			var _id = $(event.target).attr("data-id");
			var method = $(event.target).attr("data-method");
			console.log("_id : " + _id);
			console.log("method : " + method);

			Meteor.call(method, _id);
		}
		return false;		
	}
});
