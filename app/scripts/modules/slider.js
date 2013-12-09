define(['jquery','swipe', 'raphael'], function($, swipe, raphael) {
	'use strict';
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
			
			window.spinnaker = Swipe(document.getElementById('spinnaker'), {
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

			var sliderTextHeight = function(slideNo){
				var imageHeight = $('.swipe-wrap div[data-index="' + slideNo + '"]').height();
				$('.text').css({'height': imageHeight});
			}

			sliderTextHeight(0);
			$(window).on('resize', function(){
				sliderTextHeight(0);
			});



		}

	});

});