$(document).ready(function(){
    // Add target="_blank" when user opens external link
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });
});

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