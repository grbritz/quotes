'use strict';

/* Controllers */

var quoteControllers = angular.module('quoteControllers', []);

quoteControllers.controller('QuoteListCtrl', ['$scope', 'Quote',
	function ($scope, Quote) {
		$scope.quotes = Quote.query();
	}
]);