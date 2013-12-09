define(['jquery', 'localScroll', 'pjax', 'easing' ], function($, localScroll, pjax, easing) {
	'use strict';	

	
	function gmaps() {
		var styles = [
		{
		"elementType": "labels",
		"stylers": [
		{ "visibility": "off" }
		]
		},{
		"featureType": "water",
		"stylers": [
		{ "color": "#999eae" }
		]
		},{
		"featureType": "road",
		"stylers": [
		{ "visibility": "on" },
		{ "color": "#d2d0d2" }
		]
		},{
		"featureType": "administrative",
		"stylers": [
		{ "visibility": "off" }
		]
		},{
		"featureType": "landscape",
		"stylers": [
		{ "visibility": "on" },
		{ "color": "#fbfafa" }
		]
		},{
		"featureType": "poi",
		"stylers": [
		{ "visibility": "on" },
		{ "color": "#daf3da" }
		]
		},{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
		{ "visibility": "off" }
		]
		}
		];

		var mapOptions = {
			center: new google.maps.LatLng(53.65115,-8.307381),
			zoom: 7,
			disableDefaultUI: true,
			styles: styles
		};
		
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	}



	$(document).on('ready pjax:success', function() {
		
		// if its the homepage then nudge the nav down a bit
		if($('#page').has('.home').length){ 
			$('#nav').addClass('top');
		} else if($('#page').has('.stockists').length) {
			gmaps();
		} else {	
			$('#nav').removeClass('top');
		}

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

	// init the scrolling for anchor links
	$.localScroll({
		offset: 0,
		duration: 1000,
		easing: 'easeInOutQuart'
	});

	// init the pjaxing
	var duration = 400;
	$('a[data-pjax]').pjax('#page', {
		fragment: '#page',
		duration: duration
	});

	// fade in and out the page content and scroll to the right part of the page if its an anchor link
	$('#page').bind('pjax:start', function() {
		$(this).fadeOut(duration); 
	}).bind('pjax:end', function() { 
		$(window).scrollTo(0, 0); 
		$(this).fadeIn(duration);
		if($('#page').has('.home').length){
			var hashName = window.location.href.split('#')[1];
			$(window).delay(1500).scrollTo($('#' + hashName), 300);
		}
		$.localScroll({
			offset: 0,
			duration: 1000,
			easing: 'easeInOutQuart'
		});
		
	});

	$('nav a').on('click', function(){
		$('li.heading, li.heading a').removeClass('active');
		$(this).closest('li.heading').addClass('active');
	});



});