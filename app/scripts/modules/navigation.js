define(['jquery', 'localScroll', 'pjax', 'easing'], function($, localScroll, pjax, easing) {
	'use strict';	
	var nav = $('ul#menu');
	var title = $('.left h2');
	var image = $('.left img.first');
	var image2 = $('.left img.second');
	var image3 = $('.right img.third');
	
	function collision($div1, $div2) {

			var x1 = $div1.offset().left;
			var y1 = $div1.offset().top;
			var h1 = $div1.outerHeight(true);
			var w1 = $div1.outerWidth(true);
			var b1 = y1 + h1;
			var r1 = x1 + w1;
			var x2 = $div2.offset().left;
			var y2 = $div2.offset().top;
			var h2 = $div2.outerHeight(true);
			var w2 = $div2.outerWidth(true);
			var b2 = y2 + h2;
			var r2 = x2 + w2;
	
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
				$div2.removeClass('hovered');
			} else {
				$div2.addClass('hovered');
			}
	}

	$(window).scroll(function(){
		collision(nav,title);
		if($('#page').has('.home')){
			collision(nav,image);
			collision(nav,image2);
			collision(nav,image3);	
		}
	});

	$.localScroll({
		offset: -50,
		duration: 1000,
		easing: 'easeInOutQuart'
	});


	var duration = 400;
	$('a[data-pjax]').pjax('#page', {
		fragment: '#page',
		duration: duration
	});

	$('#page').bind('pjax:start', function() {
		$(this).fadeOut(duration); 
	}).bind('pjax:end', function() { 
		$(this).fadeIn(duration); 

		var hashName = window.location.href.split('#')[0];
		//console.log(hashName);
	});


});