angular.module('qt.services', [
	'ngResource'
])
.factory('QuoteService', ['$http',
	function ($http) {
		return function (publicOrPrivate) {
			/*
				Configuration
			 */

			var collectionUrl = "quotes/" + publicOrPrivate;

			//TODO: Add in API token for on a per user basis
			var defaultParams = {}; 

			var Resource = function(data) {
				angular.extend(this, data);
			};

			/**
			 * Returns a collection of all quotes
			 * @param  {obj} params
			 * @return {array}	an array of quotes
			 */
			//TODO: extend the options for parameters here
			//		Should be able to send filters to the server, as 
			//		well as limits
			//TODO: Should be able to request what the total response count would
			//		be without a limit without recieving all the quotes to cut down
			//		on network traffic
			Resource.query = function (params) {
				return $http.get(collectionUrl, {
				           params: angular.extend({q:JSON.stringify({} || params)}, defaultParams)
					}).then(function (response) { 
						var result = [];
						angular.forEach(response.data, function (value, key) {
					           	result[key] = new Resource(value);
						});
					   	return result;
					});
			};

			/**
			 * Returns a random quote
			 * @param  {obj} tags obj of tag ids to constrain randomness by
			 * @return {obj} a random quote
			 */
			Resource.random = function(tags) {
				return $http.get(collectionUrl + "/random", { params: angual.extend({ tags:tags }, defaultParams) })
					.then(function (response) {
						return response.data;	
					});
			};

			/**
			 * Gets a single quote by id
			 * @param  {int} id quote to retrieve
			 * @return {obj}    a quote
			 */
			//TODO: is this even necessary considering what .query should be able
			//		to do?
			Resource.get = function (id) {
				return $http.get(collectionUrl, { params: angular.extend({ id : id }, defaultParams) })
					.then(function (response) {
						return response.data;
					});
			};

			/**
			 * Deletes a quote
			 * @param  {int} id the quote to delete
			 * @return {Resource} an instance of this resource
			 */
			Resource.delete = function (id) {
				return $http.delete(collectionUrl, { params: angular.extend({ id : id }, defaultParams) })
					.then(function (response) {
						return new Resource(data);
					}, function (response) {
						console.log("Error - Could not delete quote : " + response);
					});
			};

			/**
			 * Delegates to Resource.delete
			 */
			Resource.remove = function (id) {
				return Resource.delete(id);
			};

			/**
			 * Saves a quote
			 * @param  {obj} data info for the quote
			 * @return {Resource} an instance of this resource
			 */
			Resource.save = function (data) {
				return $http.post(collectionUrl, data, { params : defaultParams })
					.then(function (response) {
						return new Resource(data);
					}, function (response) {
						//Error
						console.log("Error - Could not save quote : " +response);
					});
			};

			/**
			 * Instance level save method; delegates to class level
			 */
			Resource.$save = function (data) {
				return Resource.save(this);
			};

			return Resource;
		}
	}
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