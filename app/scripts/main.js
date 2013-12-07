require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.1.8.3',
		pjax: '../bower_components/jquery-pjax/jquery.pjax.duration',
		swipe: '../bower_components/swipe/swipe',
		raphael: '../bower_components/raphael/raphael',
		scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
		localScroll: '../bower_components/jquery.localScroll/jquery.localScroll',
		easing: '../bower_components/jquery.easing/js/jquery.easing'
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
			gruntdeps: ['jquery']
		}
	}
});

require(['jquery', 'pjax', 'swipe', 'raphael', 'scrollTo', 'localScroll', 'easing', 'modules/logo', 'modules/navigation', 'modules/slider',  'app'],
	function ($, pjax, swipe, raphael, scrollTo, localScroll, easing, logo, navigation, slider, app) {

	'use strict';

});
