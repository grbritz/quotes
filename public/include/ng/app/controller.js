'use strict';

/* Controllers */

var quoteControllers = angular.module('quoteControllers', []);

quoteControllers.controller('NavCtrl', ['$scope', '$location',
	function ($scope, $location) {
		$scope.isActive = function(path) {
			return $location.path().substr(0, path.length) === path;
		}
	}
]);

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