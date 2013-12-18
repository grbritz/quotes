'use strict';

/* App Module */

var quoteApp = angular.module('quoteApp', [
	'ngRoute',
	'quoteControllers',
	'quoteServices',
	'quoteFilters'

]);

quoteApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/discover', {
				templateUrl: 'include/ng/partials/discover.html',
				controller: 'DiscoverCtrl'
			})
			.when('/quotes/new', {
				templateUrl: 'include/ng/partials/quotes-new.html',
				controller: 'QuoteCreateCtrl'
			})
			.when('/quotes/list', {
				templateUrl: 'include/ng/partials/quotes-list.html',
				controller: 'QuoteListCtrl'
			})
			.when('/quotes/:quoteId', {
				templateUrl: 'include/ng/partials/quotes-detail.html',
				controller: 'QuoteDetailCtrl'
			})
			.when('/tags/new', {
				templateUrl: 'include/ng/partials/tags-new.html',
				controller: 'TagCreateCtrl'
			})
			.when('/tags/list', {
				templateUrl: 'include/ng/partials/tags-list.html',
				controller: 'TagListCtrl'
			})
			.when('/tags/:tagId', {
				templateUrl: 'include/ng/partials/tags-detail.html',
				controller: 'TagDetailCtrl'
			})
			.otherwise({
				redirectTo: '/discover'
			});
	}
]);