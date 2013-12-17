'use strict';

/* Controllers */

var quoteControllers = angular.module('quoteControllers', []);

quoteControllers.controller('QuoteListCtrl', ['$scope', 'Quote',
	function ($scope, Quote) {
		$scope.quotes = Quote.query();
	}
]);

quoteControllers.controller('TagListCtrl', ['$scope', 'TagResource', 
	function ($scope, TagResource){
		$scope.tags = TagResource.query();

		//$scope.tagFilters


	}
]);