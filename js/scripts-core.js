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

	flexJust: function(){
		var $list = $('.list'),   
	    emptyCells = [],
	    i;

	    // 子パネル (ul.cell) の数だけ空の子パネル (ul.cell.is-empty) を追加する。
		for (i = 0; i < $list.find('.item').length; i++) {
		    emptyCells.push($('<div>', { class: 'item js-flexFixed' }));
		}

		$list.append(emptyCells);
	},

	init: function () {
		opA.animation();
		opA.flexJust();
	}
}

$(window).load(function () {
	opA.init();
});