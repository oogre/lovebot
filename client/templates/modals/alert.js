//
var modalNum = 1;
var modalPos = [];
Template.alert.events = {
	"shown.bs.modal #alertModal" : function(){
		Meteor.resetTimeoutFnc();
		
	},
	"show.bs.modal #alertModal" : function(){
		$("#audioWarn").trigger('play');
		modalPos = [$("#alertModal").find(".modal-dialog").css("marginTop"), $("#alertModal").find(".modal-dialog").css("marginLeft")];
		modalPos[0] = parseInt(modalPos[0].substring(0, modalPos[0].length - 2));
		modalPos[1] = parseInt(modalPos[1].substring(0, modalPos[1].length - 2));
	},
	"click .modal" :function(e){
		openModal(e);
	}
}

var openModal = function(e){
	if($(e.target).hasClass("modal")){
		$("#alertModal")
		.clone()
		.removeAttr("id")
		.find("#audioWarn").trigger('play')
		.end()
		.modal({
			backdrop: 'static',
			keyboard: false
		})
		.on("click", function(e){
			openModal(e);
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
