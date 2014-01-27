function gmaps(locations) {
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
			styles: styles,
			scrollwheel: false
		};

		
		
		
	
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var markerIcon = '../images/marker.png';




		var markers, i;


		for (var i = 0; i < locations.length; i++) {
    	createMarker(i);
		}



		function createMarker(i) {   

	  		markers = new google.maps.Marker({ 
				position: new google.maps.LatLng(locations[i][1],locations[i][2]),
				map: map, 
				icon: markerIcon 
			});

	  		var address = locations[i][1];

	      	var infowindow = new google.maps.InfoWindow({
	      		content: String(locations[i][3], locations[i][4])
	      	});

	      	google.maps.event.addListener(markers, 'click', (function(markers, i) {
	        return function() {
	          infowindow.open(map, markers);
	        }
	      	})(markers, i));

      	}

	}