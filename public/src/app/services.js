angular.module('qt.services', [
	'ngResource'
])
.factory('UserQuote', ['$resource',
	function ($resource) {
		var service = $resource('quotes/user/:id',
						{id  : "@id"},
						{
							random: {method : "GET", params : {id: "random"}}
						}
					);
		

		
		return service;
	}
])
.factory('Tag', ['$resource',
	function ($resource) {
		var TagService = {};
		TagService.resource = $resource('tags/user');

		return TagService;
	}
])
.factory('PublicQuotes', ['$resource',
	function ($resource) {
		return $resource('quotes/public/:id',
						{id  : "@id"},
						{
							random: {method : "GET", params : {id: "random"}}
						}
					);
	}
]);