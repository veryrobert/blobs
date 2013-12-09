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

		var image = 'https://dl-web.dropbox.com/get/Screenshots/marker.png?w=AABu4WJsyMqikEmNtJnw6z3ILrt7BkNocM02siKb7auVaA';
		
		var killkenny = new google.maps.Marker({ position: new google.maps.LatLng(53.342452,-6.255803), map: map, icon: image });
		var killkennyPav = new google.maps.Marker({ position: new google.maps.LatLng(53.453931,-6.219016), map: map, icon: image });
		var project51 = new google.maps.Marker({ position: new google.maps.LatLng(53.341636,-6.262799), map: map, icon: image });
		var franjane = new google.maps.Marker({ position: new google.maps.LatLng(53.286307,-6.240591), map: map, icon: image });
		var place = new google.maps.Marker({ position: new google.maps.LatLng(52.676616,-6.293667), map: map, icon: image });
		var noelle = new google.maps.Marker({ position: new google.maps.LatLng(53.272258,-7.494246), map: map, icon: image });
		var elaine = new google.maps.Marker({ position: new google.maps.LatLng(52.835563,-6.929038), map: map, icon: image });
		var granary = new google.maps.Marker({ position: new google.maps.LatLng(52.376149,-7.924729), map: map, icon: image });
		var killkennyCork = new google.maps.Marker({ position: new google.maps.LatLng(51.851686,-8.03333), map: map, icon: image });
		var fiona = new google.maps.Marker({ position: new google.maps.LatLng(52.176024,-8.247539), map: map, icon: image });
		var midleton = new google.maps.Marker({ position: new google.maps.LatLng(51.913832,-8.172118), map: map, icon: image });
		var moycullen = new google.maps.Marker({ position: new google.maps.LatLng(53.338971,-9.18153), map: map, icon: image });
		var catmoon = new google.maps.Marker({ position: new google.maps.LatLng(54.2706,-8.472887), map: map, icon: image });
		var catmoon = new google.maps.Marker({ position: new google.maps.LatLng(54.2706,-8.472887), map: map, icon: image });
	}

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

		$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart', lazy: true, hash: true});

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
		//$.localScroll({ offset: 0, duration: 1000, easing: 'easeInOutQuart'});
		//$(window).scrollTo(0, 0); 
		$(this).fadeIn(duration);
		if($('#page').has('.home').length){
			var hashName = window.location.href.split('#')[1];
			// setTimeout(function(){
			// 	$(window).scrollTo($('#' + hashName), 300);

			// }, 500);
		}

		
	});

	// highlight the appropriate part of the site the user is on
	$('nav a').on('click', function(){
		$('li.heading, li.heading a').removeClass('active');
		$(this).closest('li.heading').addClass('active');
	});



});