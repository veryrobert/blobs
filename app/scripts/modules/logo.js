define(['jquery', 'raphael'], function($, raphael) {

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

});