require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		swipe: '../bower_components/swipe/swipe',
		raphael: '../bower_components/raphael/raphael',
		scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
		localScroll: '../bower_components/jquery.localScroll/jquery.localScroll',
		transit: '../bower_components/jquery.transit/jquery.transit'
	},
	shim: {
      'scrollTo': {
        deps: ['jquery']
      },
      'localScroll': {
        deps: ['jquery', 'scrollTo']
      },
      'transit': {
        deps: ['jquery']
      }
    }
});

require(['jquery', 'swipe', 'transit', 'raphael', 'scrollTo', 'localScroll', 'modules/logo', 'modules/slider', 'app'], function (app, logo, raphael, swipe, $) {
	'use strict';
	console.log('main loaded');
});
