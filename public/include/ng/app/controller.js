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

quoteControllers.controller('TagListCtrl', ['$scope', 'Tag', 
	function ($scope, Tag){
		$scope.tags = Tag.resource.query();


		$scope.tagFilter = function(filters){
			return function(tag){
				if(filters){
					return filters.filter(function(element){
						return tag.name.indexOf(element) != -1;
					}).length > 0;
				}
				else{
					return true;
				}
				
				//return tag.name == filters[0];
			}
			//return tag.name == "curiosity";
		}
	}
]);