'use strict';

/* Services */

var quoteServices = angular.module('quoteServices', ['ngResource']);

quoteServices.factory('UserQuote', ['$resource',
	function ($resource) {
		var service = $resource('quotes/user/:id',
						{id  : "@id"},
						{
							random: {method : "GET", params : {id: "random"}}
						}
					);
		

		
		return service;
	}
]);

quoteServices.factory('Tag', ['$resource',
	function ($resource){
		var TagService = {};
		TagService.resource = $resource('tags/user');

		return TagService;
	}
]);

quoteServices.factory('PublicQuotes', ['$resource',
	function ($resource) {
		return $resource('quotes/public/:id',
						{id  : "@id"},
						{
							random: {method : "GET", params : {id: "random"}}
						}
					)
	}
]);