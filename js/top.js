var opA = {

	animation: function(){
		
		setTimeout(function (){
			$('.js-load-bg').fadeOut('slow');
		},1000);
	},

	init: function () {
		opA.animation();
	}
}

$(window).load(function () {
	opA.init();
});