angular.module('qt.discover', [
	'ui.router'
])

.config(['$stateProvider', function ($stateProvider){
	$stateProvider.state( 'discover', {
		url: '/discover',
		views: {
			"main": {
				controller: 'DiscoverCtrl',
				templateUrl: 'discover/discover.tpl.html'
			}
		},
		data: {
			pageTitle: 'Discover quotes'
		}
	});
}])

.controller('DiscoverCtrl', ['$scope', 'PublicQuotes', 
	function DiscoverCtrl ($scope, PublicQuotes) {
		$scope.randomQuote =  PublicQuotes.random();

		$scope.newQuote = function() {
			$scope.randomQuote = PublicQuotes.random();
		};
	}
]);