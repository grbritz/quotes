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

		$scope.removeTag = function (quoteId, tagId) {
			//TODO : sync this change with the server
			$scope.quotes = $scope.quotes.map(function(ele, ind) {
				if(ele.id == quoteId) {
					ele.tags = ele.tags.filter(function(ele2) {
						return ele2.id != tagId;
					});
				}
				return ele;
			});
		};
	}
]);

quoteControllers.controller('TagListCtrl', ['$scope', 'Tag', 
	function ($scope, Tag){
		$scope.tags = Tag.resource.query();
	}
]);