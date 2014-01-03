angular.module('qt.quotes', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('quotes', {
      url: '/quotes',
      views: {
        'main': {
          controller: 'QuotesCtrl',
          templateUrl: 'quotes/quotes.tpl.html'
        }
      },
      data: 'List quotes'
    });
  }
]).controller('QuotesCtrl', [
  '$scope',
  'QuoteService',
  function ($scope, QuoteService) {
    $scope.removeTagIcon = 'fa-times';
    $scope.publicOrUser = 'public';
    var Quotes = new QuoteService($scope.publicOrUser);
    $scope.removeTag = function (removeInfo) {
      var quoteId = removeInfo.quoteId;
      var tagId = removeInfo.tagId;
      $scope.quotes = $scope.quotes.map(function (ele, ind) {
        if (ele.id == quoteId) {
          ele.tags = ele.tags.filter(function (ele2) {
            return ele2.id != tagId;
          });
        }
        return ele;
      });
    };
    $scope.togglePublicOrUser = function () {
      $scope.publicOrUser = $scope.publicOrUser === 'user' ? 'public' : 'user';
      Quotes = new QuoteService($scope.publicOrUser);
      $scope.getQuotes();
    };
    $scope.getQuotes = function () {
      Quotes.query().then(function (quotes) {
        $scope.quotes = quotes;
      });
    };
    $scope.getQuotes();
  }
]);