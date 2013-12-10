define(['jquery', 'swipe', 'localScroll', 'pjax', 'easing', 'modules/map' ], function($, swipe, localScroll, pjax, easing, map) {
	'use strict';	

	// every time the page loads, both normally and ajaxily do...
	$(document).on('ready pjax:success', function() {
		
		// if its the homepage then nudge the nav down a bit
		if($('#page').has('.home').length){ 
			$('#nav').addClass('top');
		} else if($('#page').has('.stockists').length) {
			gmaps();
		} else {	
			$('#nav').removeClass('top');
		}

		var duration = 400;
		
		$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart'/*, lazy: true, hash: true*/});

		// init the pjaxing
		$('a[data-pjax]').pjax('#page', {
			fragment: '#page',
			duration: duration
		});

		// fade in and out the page content and scroll to the right part of the page if its an anchor link
		$('#page').bind('pjax:start', function() {
			$(this).fadeOut(duration); 
		}).bind('pjax:end', function() { 

			$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart'});
			$(window).scrollTo(0, 0); 

			$(this).fadeIn(duration);
			if($('#page').has('.home').length){
				var hashName = window.location.href.split('#')[1];

				setTimeout(function(){
					$(window).scrollTo($('#' + hashName), 300);

				}, 500);

			}
		});

		// Timeout for swipes to load
		setTimeout(function(){

				if ( $('#page').has('.home').length ){

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

					$('#slider').hide().fadeIn(1000);

				} else if ( $('#page').has('.collections').length ){
					
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

				} else if ( $('#page').has('.product').length ){

					window.product = Swipe(document.getElementById('product-single'), {
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

		}, 500);


	});

	// on the homepage when scrolling move the menu to the top
	$(window).scroll(function(){
		if($('#page').has('.home').length){ 
			var scrollPos = window.pageYOffset;
			var scrollDist = 100;
			if(scrollPos > scrollDist) {
				$('#nav').removeClass('top');
			} else {
				$('#nav').addClass('top');
			}
		}
	});

	// Vary the nav height when interacting
	var navHeight = $('#nav nav').height();
	$('li.heading').on('mouseenter', function(){
		var subNavHeight = $(this).find('ul').height();
		$('#nav nav').animate({'height': (navHeight + subNavHeight - 30)}, 150);
	});
	$('nav').on('mouseleave', function(){
		$('#nav nav').animate({'height': '75px'}, 150);
	});


	// highlight the appropriate part of the site the user is on
	$('nav a').on('click', function(){
		$('li.heading, li.heading a').removeClass('active');
		$(this).closest('li.heading').addClass('active');
	});



});