//
var modalNum = 1;
var modalPos = [];
var modalAlertNum = 1;
var modalAlertPos = [];
Template.confirmModal.events = {
	"shown.bs.modal #confirmModal" : function(){
		Meteor.resetTimeoutFnc();
		
	},
	"show.bs.modal #confirmModal" : function(){
		$("#audioWarn").trigger('play');
		modalPos = [$("#confirmModal").find(".modal-dialog").css("marginTop"), $("#confirmModal").find(".modal-dialog").css("marginLeft")];
		modalPos[0] = parseInt(modalPos[0].substring(0, modalPos[0].length - 2));
		modalPos[1] = parseInt(modalPos[1].substring(0, modalPos[1].length - 2));
		modalAlertPos = modalPos;
	},
	"click .modal" :function(e){
		openconfirmModal(e);
	}
}

var openconfirmModal = function(e){
	if($(e.target).hasClass("modal")){
		$("#confirmModal")
		.clone()
		.removeAttr("id")
		.find("#audioWarn").trigger('play')
		.end()
		.modal({
			backdrop: 'static',
			keyboard: false
		})
		.on("click", function(e){
			openconfirmModal(e);
		})
		.modal("show")
		.one('hidden.bs.modal', function (event) {
			modalNum--;
		})
		.find(".modal-dialog")
		.css({
			marginTop : modalPos[0] + modalNum * 20+"px",
			marginLeft : modalPos[1] + modalNum * 20+"px"
		});
		modalNum++;
	}
}

Template.confirmModal.openAlertModal = function(e, message){
	if(e == null || $(e.target).hasClass("modal")){
		$("#alertModal")
		.clone()
		.removeAttr("id")
		.find("#audioWarn").trigger('play').end()
		.modal({
			backdrop: 'static',
			keyboard: false
		})
		.on("click", function(e){
			Template.confirmModal.openAlertModal(e, message);
		})
		.modal("show")
		.one('hidden.bs.modal', function (event) {
			modalAlertNum--;
		})
		.find(".modal-dialog")
		.css({
			marginTop : modalAlertPos[0] + modalAlertNum * 20+"px",
			marginLeft : modalAlertPos[1] + modalAlertNum * 20+"px"
		})
		.end()
		.find(".message")
		.html(message);
		modalAlertNum++;
	}
}
