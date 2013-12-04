define(['swipe', 'raphael'], function(swipe, raphael) {
	
	window.mySwipe = Swipe(document.getElementById('slider'), {
		startSlide: 2,
		speed: 500,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function(index, elem) {},
		transitionEnd: function(index, elem) {}
	});

	var next = new Raphael(document.getElementById('next'), 30, 30);
	var nextArrow = next.path('M5,5l15,10l-15,10').attr({'stroke-width': '2', 'stroke':'#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'});
	var nextBox = next.rect(0,0,30,30).attr({'fill' : 'red', 'stroke': '0', 'stroke-opacity': '0', 'fill-opacity': '0'});

	nextBox.hover(function(){
		nextArrow.animate({path:'M5,10l25,5l-25,5'}, 100);
	}, function(){
		nextArrow.animate({path:'M5,5l15,10l-15,10'}, 100);
	});

	var prev = new Raphael(document.getElementById('prev'), 30, 30);
	var prevArrow = prev.path('M5,5l15,10l-15,10').attr({'stroke-width': '2', 'stroke':'#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'}).transform('r180t-5,0');
	var prevBox = prev.rect(0,0,30,30).attr({'fill' : 'red', 'stroke': '0', 'stroke-opacity': '0', 'fill-opacity': '0'});

	prevBox.hover(function(){
		prevArrow.animate({path:'M5,10l25,5l-25,5'}, 100);
	}, function(){
		prevArrow.animate({path:'M5,5l15,10l-15,10'}, 100);
	});



});