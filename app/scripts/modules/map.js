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