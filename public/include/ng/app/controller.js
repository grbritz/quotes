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

quoteControllers.controller('QuoteListCtrl', ['$scope', 'UserQuote',
	function ($scope, UserQuote) {
		$scope.quotes = UserQuote.query();
		$scope.isCollapsed = false;
		$scope.removeTagIcon = "fa-times";

		$scope.removeTag = function (removeInfo) {
			var quoteId = removeInfo.quoteId;
			var tagId = removeInfo.tagId;

			//TODO : sync this change with the server
			$scope.quotes = $scope.quotes.map(function(ele, ind) {
				if(ele.id == quoteId) {
					ele.tags = ele.tags.filter(function(ele2) {
						return ele2.id != tagId;
					});
				}
				return ele;
			});

			//Server.update('user/quote/quoteId,' ta)


		};
	}
]);

quoteControllers.controller('TagListCtrl', ['$scope', 'Tag', 
	function ($scope, Tag) {


		$scope.tags = Tag.resource.query();
		$scope.removeTagIcon = "fa-trash-o";
		$scope.confirmDeleteTags = false;
		$scope.tagsToDelete = [];

		$scope.removeTag = function(removeInfo) {
			var tagId = removeInfo.tagId;
			$scope.confirmDeleteTags = true;
			$scope.tagsToDelete.push(tagId);
			
			$scope.tags = $scope.tags.filter(function(ele) {
				return ele.id != tagId;
			});
		};

		$scope.deleteTags = function() {
			
			// TODO: tell server to remove each tag in tag list
			// foreach id:tagsToDelete: DELETE tags/user/{{id}}
			$scope.confirmDeleteTags = false;
		};

		$scope.cancelDeleteTags = function() {
			$scope.confirmDeleteTags = false;
			$scope.tags = Tag.resource.query();
		};

	}
]);

quoteControllers.controller('DiscoverCtrl', ['$scope', 'PublicQuotes',
	function($scope, PublicQuotes) {
		$scope.randomQuote =  PublicQuotes.random();

		$scope.newQuote = function() {
			$scope.randomQuote = PublicQuotes.random();
		};
	}	
]);














