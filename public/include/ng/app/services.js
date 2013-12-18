'use strict';

/* Services */

var quoteServices = angular.module('quoteServices', ['ngResource']);

quoteServices.factory('Quote', ['$resource',
	function ($resource) {
		return $resource('quotes/:source', {source: 'user'});
	}
]);

quoteServices.factory('Tag', ['$resource',
	function ($resource){
		var TagService = {};
		TagService.resource = $resource('tags/:source', {source: 'user'})

		return TagService;
	}
]);