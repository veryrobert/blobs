require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.1.8.3',
		pjax: '../bower_components/jquery-pjax/jquery.pjax.duration',
		swipe: '../bower_components/swipe/swipe',
		raphael: '../bower_components/raphael/raphael',
		scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
		localScroll: '../bower_components/jquery.localScroll/jquery.localScroll',
		easing: '../bower_components/jquery.easing/js/jquery.easing',
		map: '../scripts/modules/map'
	}/*,
	shim: {
		'pjax': {
			deps: ['jquery']
		},
		'scrollTo': {
			deps: ['jquery']
		},
		'localScroll': {
			deps: ['jquery', 'scrollTo']
		},
		'easing': {
			deps: ['jquery']
		}
	}*/
});

require(['jquery', 'pjax', 'swipe', 'raphael', 'scrollTo', 'localScroll', 'easing', 'map'],
	function ($, pjax, swipe, raphael, scrollTo, localScroll, easing, map) {
	'use strict';


	$(document).ready(function(){

		console.log('ready');
		
		// Logo stuff
		var logoPage = new Raphael(document.getElementById('logo'), 80, 80);
		var circle = logoPage.circle(40, 40, 31).attr({'stroke-width': '2', fill: '#000000', 'fill-opacity': '0'});
		var logoB = logoPage.path('M24,35c0,0,5,0,6,0 c2,0,4-1,4-3s-2-3-4-3 M24,23h6 c3,0,3,2,3,3c0,2-2,3-4,3c-2,0-3,0-3,0 M27,23l0,11').attr({'stroke-width': '2'}); 
		var slash = logoPage.path('M 26, 54 l 28, -28').attr({'stroke-width': '2'});
		var logoE = logoPage.path('M45,45h9v3 M45,57 h9v-3 M48,57V45 M48,51h5').attr({'stroke-width': '2'}); 
		var logoHover = logoPage.rect(0, 0, 80, 80).attr({fill: '#333', stroke:'0', 'fill-opacity': '0', 'stroke-opacity': '0'});

		logoHover.hover(function(){
			circle.animate({'fill-opacity': '1'}, 100);
			slash.animate({stroke: '#ffffff'}, 100);
			logoB.animate({stroke: '#ffffff'}, 100);
			logoE.animate({stroke: '#ffffff'}, 100);
		}, function(){
			circle.animate({'fill-opacity': '0'}, 100);
			slash.animate({stroke: '#000'}, 100);
			logoB.animate({stroke: '#000'}, 100);
			logoE.animate({stroke: '#000'}, 100);
		});

		// init the pjaxing
		$('a[data-pjax]').pjax('#page', {
			fragment: '#page',
			duration: 400
		});

		if ( $('#page').has('.home').length ){
			// if its the homepage then nudge the nav down a bit
			$('#nav').addClass('top');
			$('#menu > li:nth-child(2)').find('a').attr('href').replace('index.html', '');
			$('#menu > li:nth-child(2)').find('a').removeAttr('data-pjax');
			window.mySwipe = Swipe(document.getElementById('slider'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {} });
			
			$('#slider').hide().fadeIn(1000);

			// when scrolled move the menu to the top
			$(window).scroll(function(){
				var scrollPos = window.pageYOffset;
				var scrollDist = 100;
				if(scrollPos > scrollDist) {
					$('#nav').removeClass('top');
				} else {
					$('#nav').addClass('top');
				}	
			});

		} else if ( $('#page').has('.collections').length ){
			
			window.spinnaker = Swipe(document.getElementById('spinnaker'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {} });
			window.karelain = Swipe(document.getElementById('karelain'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {} });
			window.topaz = Swipe(document.getElementById('topaz'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {} });

			var sliderTextHeight = function(slideNo){
				var imageHeight = $('.swipe-wrap div[data-index="' + slideNo + '"]').height();
				$('.text').css({'height': imageHeight});
			}

			sliderTextHeight(0);
			$(window).on('resize', function(){
				sliderTextHeight(0);
			});

			$('#spinnaker').hide().fadeIn(1000);
			$('#karelain').hide().fadeIn(1000);
			$('#topaz').hide().fadeIn(1000);

		} else if ( $('#page').has('.product').length ){

			window.product = Swipe(document.getElementById('product-single'), {
				startSlide: 0,
				speed: 500,
				auto: 10000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {} });

			$('#product-single').hide().fadeIn(1000);				

		}

		$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart'});


	});



	$('#page').on('pjax:success', function() {

		console.log('pjax:success');

		// if its the homepage then nudge the nav down a bit
		if($('#page').has('.home').length){ 
			$('#nav').addClass('top');
			$('#menu > li:nth-child(2)').find('a').removeAttr('data-pjax');
			
		} else if($('#page').has('.stockists').length) {

			$('#menu > li:nth-child(2)').find('a').attr('data-pjax');
			gmaps();
			('#nav').removeClass('top');
		} else {	

			$('#menu > li:nth-child(2)').find('a').attr('data-pjax');
			$('#nav').removeClass('top');
		}

		// when scrolled move the menu to the top
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


		// fade in and out the page content and scroll to the right part of the page if its an anchor link
		$('#page').on('pjax:start', function() {
			
			$(this).fadeOut(400); 

		}).on('pjax:success', function() { 

			$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart'});
			$(window).scrollTo(0, 0); 
			$(this).fadeIn(400);
			if ( window.location.href.indexOf('index') > -1 ) {
				
				var hashName = window.location.href.split('#')[1];
				
				console.log(hashName);
				$(window).scrollTo($('#' + hashName), 300);

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
					transitionEnd: function(index, elem) {} });
				
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
					transitionEnd: function(index, elem) {} });
				window.karelain = Swipe(document.getElementById('karelain'), {
					startSlide: 0,
					speed: 500,
					auto: 10000,
					continuous: true,
					disableScroll: false,
					stopPropagation: false,
					callback: function(index, elem) {},
					transitionEnd: function(index, elem) {} });
				window.topaz = Swipe(document.getElementById('topaz'), {
					startSlide: 0,
					speed: 500,
					auto: 10000,
					continuous: true,
					disableScroll: false,
					stopPropagation: false,
					callback: function(index, elem) {},
					transitionEnd: function(index, elem) {} });

				var sliderTextHeight = function(slideNo){
					var imageHeight = $('.swipe-wrap div[data-index="' + slideNo + '"]').height();
					$('.text').css({'height': imageHeight});
				}

				sliderTextHeight(0);
				$(window).on('resize', function(){
					sliderTextHeight(0);
				});

				$('#spinnaker').hide().fadeIn(1000);
				$('#karelain').hide().fadeIn(1000);
				$('#topaz').hide().fadeIn(1000);

			} else if ( $('#page').has('.product').length ){

				window.product = Swipe(document.getElementById('product-single'), {
					startSlide: 0,
					speed: 500,
					auto: 10000,
					continuous: true,
					disableScroll: false,
					stopPropagation: false,
					callback: function(index, elem) {},
					transitionEnd: function(index, elem) {} });

				$('#product-single').hide().fadeIn(1000);				

			}

		}, 500);
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
