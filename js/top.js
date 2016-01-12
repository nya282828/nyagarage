var opA = {

	animation: function(){

		setTimeout(function (){
			$('.js-load-bg').fadeOut(100);
			$('.js-slideIn').addClass('try-head');
		},1000);
	},

	init: function () {
		opA.animation();
	}
}

$(window).load(function () {
	opA.init();
});