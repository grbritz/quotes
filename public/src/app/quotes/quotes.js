angular.module('qt.quotes', [
	'ui.router'
])

.config(['$stateProvider', function config( $stateProvider ){
	$stateProvider.state('quotes', {
		url: '/quotes',
		views: {
			"main": {
				controller: 'QuotesCtrl',
				templateUrl: 'quotes/quotes.tpl.html'
			}
		},
		data: 'List quotes'
	});
}])
.controller('QuotesCtrl', ['$scope', 'QuoteService', 
	function ($scope, QuoteService) {
		//Initialize scope attributes
		$scope.removeTagIcon = "fa-times";
		$scope.publicOrUser = "user";

		var Quotes = new QuoteService($scope.publicOrUser);
		
		

		/**
		 * Removes a tag from a quote
		 * @param  {[type]} removeInfo [description]
		 * @return {[type]}            [description]
		 */
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
		};

		/**
		 * Toggles between viewing public or user quotes
		 * @return {[type]} [description]
		 */
		$scope.togglePublicOrUser = function() {
			$scope.publicOrUser = $scope.publicOrUser === "user" ? "public" : "user";
			Quotes = new QuoteService($scope.publicOrUser);

		};

		/**
		 * Pulls the list of quotes from the server
		 * @return {[type]} [description]
		 */
		$scope.getQuotes = function () {
			Quotes.query().then(function(quotes) {
				$scope.quotes = quotes;
			});
		};
	}
]);