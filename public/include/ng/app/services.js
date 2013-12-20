'use strict';

/* Services */

var quoteServices = angular.module('quoteServices', ['ngResource']);

quoteServices.factory('Quote', ['$resource',
	function ($resource) {
		var QuotesService = {
			all : function () {
					return $resource('quotes/public').query();
				},
			get : function(id) {
					return $resource('quotes/public/:quoteId', {quoteId : id}).query();
			},
			random : function () {
				return $resource('quotes/public/random/').query();
			},
			user : {
				all : function () {
						return $resource('quotes/user/').query();
					},
				random : function () {
						return $resource('quotes/user/random').query();
					},
				get : function (id) {
						return $resource('quotes/user/:quoteId', {quoteId : id}).query();
					},
				update : function (quote) {
							
				}
			}


		};
		QuotesService.all = function () {
			return $resource('quotes/public').query();
		};

		QuotesService.user.all = function () {
			return $resource('quotes/user/').query();
		};

		QuotesService

		return QuotesService;
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