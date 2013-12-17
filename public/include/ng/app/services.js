'use strict';

/* Services */

var quoteServices = angular.module('quoteServices', ['ngResource']);

quoteServices.factory('Quote', ['$resource',
	function ($resource) {
		return $resource('quotes/:source', {source: 'user'});
	}
]);

quoteServices.factory('TagResource', ['$resource',
	function ($resource){
		return $resource('tags/:source', {source: 'user'});
	}
]);