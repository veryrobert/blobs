require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.1.8.3',
		pjax: '../bower_components/jquery-pjax/jquery.pjax.duration',
		swipe: '../bower_components/swipe/swipe',
		raphael: '../bower_components/raphael/raphael',
		scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
		localScroll: '../bower_components/jquery.localScroll/jquery.localScroll',
		easing: '../bower_components/jquery.easing/js/jquery.easing',
		fastClick: '../bower_components/jquery-fast-click/jQuery.fastClick',
		map: '../scripts/modules/map'

	},
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
		},
		'fastClick': {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'pjax', 'swipe', 'raphael', 'scrollTo', 'localScroll', 'easing', 'fastClick', 'map'],
	function ($, pjax, swipe, raphael, scrollTo, localScroll, easing, fastClick, map) {
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



		if ($(window).width() <= 450){	
			circle.animate({'fill-opacity': '1'}, 20);
			slash.animate({stroke: '#ffffff'}, 20);
			logoB.animate({stroke: '#ffffff'}, 20);
			logoE.animate({stroke: '#ffffff'}, 20)


		}	
		else {
			circle.animate({'fill-opacity': '0'}, 20);
			slash.animate({stroke: '#000'}, 20);
			logoB.animate({stroke: '#000'}, 20);
			logoE.animate({stroke: '#000'}, 20);
		}
	



	


		if(checkDevice() === true) {

			var navHeight = $('#nav nav').height();

			$('.noMobLink').removeAttr('href');

			$('.heading').on('click', function(){
				$(this).addClass('clicked');
				$('#menu > li.heading, #menu > li').on('click', function(){
					var subNavHeight = $(this).find('ul').height();
					$('#nav nav').animate({'height': (navHeight + ((subNavHeight > 0) ? subNavHeight - 30 : 0)) }, 150);
				});
			});

			$('#page').on('pjax:success', function(){
				$('.heading').removeClass('clicked');
				$('#nav nav').animate({'height': '75px'}, 150);
			});

		}


		if ($('.home').length > 0) {
				$(window).on('scroll', function(){
					if ($(window).scrollTop() > $('#slider').height()){
						$('#menu li a').removeClass('white');
					} else {
						$('#menu li a').addClass('white');
					}
				});
		}


		if ( $('.home').length > 0){
			console.log('worked');

			$('#nav').addClass('top');

			$('#menu li a').addClass('white');
			
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
				if( $('.home').length > 0 ){
					var scrollPos = window.pageYOffset;
					var scrollDist = 100;
					if(scrollPos > scrollDist) {
						$('#nav').removeClass('top');
					} else {
						$('#nav').addClass('top');
					}	
				}
			});

		} else if (  window.location.href.indexOf('collections') > -1 ){
			
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

			$('#nav').removeClass('top');
			
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

		} else if ( window.location.href.indexOf('product') > -1 ) {

			$('#nav').removeClass('top');

			$('#menu li a').removeClass('white');

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

		} else if( window.location.href.indexOf('stockists') > -1 ) {

			$('#nav').removeClass('top');
			$('#menu li a').removeClass('white');
			gmaps();

		} else if( window.location.href.indexOf('shop') > -1 || window.location.href.indexOf('press') > -1 ) {

			$('#nav').removeClass('top');
			$('#menu li a').removeClass('white');
		}

		// init the pjaxing
		$('a[data-pjax]').pjax('#page', {
			fragment: '#page',
			duration: 400
		});

		$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart' });

	});



	// fade in and out the page content and scroll to the right part of the page if its an anchor link
	$('#page').on('pjax:start', function() {
		
		$(this).fadeOut(400); 

	}).on('pjax:success', function() { 

		console.log('pjax:success'); 


		if ($('.home').length > 0) {
				$(window).on('scroll', function(){
					if ($(window).scrollTop() > $('#slider').height()){
						$('#menu li a').removeClass('white');
					} else {
						$('#menu li a').addClass('white');
					}
				});
		} else {

				$(window).on('scroll', function(){

					if ($(window).scrollTop() < 0) {
						$('#menu li a').removeClass('white');
					} 
				});

		}

		
		$(this).fadeIn(400);

		
		// if its the homepage then nudge the nav down a bit
		if( $('.home').length > 0 ){ 
	
			$('#nav').addClass('top');
			$('#menu li a').addClass('white');


			// when scrolled move the menu to the top
			$(window).scroll(function(){
				if( $('.home').length > 0 ){
					var scrollPos = window.pageYOffset;
					var scrollDist = 100;
					if(scrollPos > scrollDist) {
						$('#nav').removeClass('top');

					} else {
						$('#nav').addClass('top');
						$('#menu li a').removeClass('white');
					}
				}
			});
			
		} else if( window.location.href.indexOf('stockists') > -1 ) {

			$('#nav').removeClass('top');
			$('#menu li a').removeClass('white');
			gmaps();
			
		}  else if( window.location.href.indexOf('shop') > -1 ) {	

			$('#nav').removeClass('top');
			$('#menu li a').removeClass('white');
			// displayResults(results);
			// Refresh Snipcart products
			Snipcart.do("refreshProducts");
		    console.log('shop functions init');
		
		} else if (window.location.href.indexOf('press') > -1 || window.location.href.indexOf('collections') > -1 || window.location.href.indexOf('product') > -1  || window.location.href.indexOf('about') > -1 || window.location.href.indexOf('contact') > -1) {
			$('#nav').removeClass('top');
			$('#menu li a').removeClass('white');
		}

		// Timeout for swipes to load
		setTimeout(function(){

			if ( $('.home').length > 0 ){

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

			} else if ( window.location.href.indexOf('collections') > -1 ){
				
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

			} else if ( window.location.href.indexOf('product') > -1 ){

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


	// highlight the appropriate part of the site the user is on
	$('nav a').on('click', function(){
		$('li.heading, li.heading a, li , a').removeClass('active');
		$(this).closest('#menu > li').addClass('active');

	});


	// Vary the nav height when interacting
	var navHeight = $('#nav nav').height();
	$('#menu > li.heading, #menu > li').on('mouseenter', function(){
		var subNavHeight = $(this).find('ul').height();
		$('#nav nav').animate({'height': (navHeight + ((subNavHeight > 0) ? subNavHeight - 30 : 0)) }, 150);
	});
	$('nav').on('mouseleave', function(){
		$('#nav nav').animate({'height': '75px'}, 150);
	});




	function checkDevice(){
	    return (
	        (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
	        (navigator.platform.toLowerCase().indexOf("android") > -1)||
	        (navigator.userAgent.toLowerCase().indexOf("webOS") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("blackberry") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("IEMobile") > -1) ||
	        (navigator.userAgent.toLowerCase().indexOf("opera mini") > -1)
	    );
	}





});
