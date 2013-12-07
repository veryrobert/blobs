define(['jquery','swipe', 'raphael'], function($, swipe, raphael) {

	$(document).on('ready pjax:success', function() {

		if($('#page').has('.home').length){
			window.mySwipe = Swipe(document.getElementById('slider'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {}
			});

		} else if( $('#page').has('.collections').length){
			
			window.spinaker = Swipe(document.getElementById('spinaker'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {}
			});

			window.karelain = Swipe(document.getElementById('karelain'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {}
			});

			window.topaz = Swipe(document.getElementById('topaz'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {}
			});

		}

		var next = new Raphael(document.getElementById('next'), 30, 30);
		var nextArrow = next.path('M10,10l5,5l-5,5').attr({'stroke-width': '3', 'stroke':'#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'});
		var nextBox = next.rect(0,0,30,30).attr({'fill' : 'red', 'stroke': '0', 'stroke-opacity': '0', 'fill-opacity': '0'});

		nextBox.hover(function(){
			nextArrow.animate({path:'M5,5l10,10l-10,10'}, 100);
		}, function(){
			nextArrow.animate({path:'M10,10l5,5l-5,5'}, 100);
		});

		var prev = new Raphael(document.getElementById('prev'), 30, 30);
		var prevArrow = prev.path('M10,10l5,5l-5,5').attr({'stroke-width': '3', 'stroke':'#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'}).transform('r180t-5,0');
		var prevBox = prev.rect(0,0,30,30).attr({'fill' : 'red', 'stroke': '0', 'stroke-opacity': '0', 'fill-opacity': '0'});

		prevBox.hover(function(){
			prevArrow.animate({path:'M5,5l10,10l-10,10'}, 100);
		}, function(){
			prevArrow.animate({path:'M10,10l5,5l-5,5'}, 100);
		});

	});

});