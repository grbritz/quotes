angular.module('qt.discover', ['ui.router']).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('discover', {
      url: '/discover',
      views: {
        'main': {
          controller: 'DiscoverCtrl',
          templateUrl: 'discover/discover.tpl.html'
        }
      },
      data: { pageTitle: 'Discover quotes' }
    });
  }
]).controller('DiscoverCtrl', [
  '$scope',
  'QuoteService',
  function DiscoverCtrl($scope, QuoteService) {
    var Quotes = new QuoteService('public');
    $scope.newQuote = function () {
      Quotes.random().then(function (quote) {
        $scope.randomQuote = quote;
      });
    };
    $scope.newQuote();
  }
]);