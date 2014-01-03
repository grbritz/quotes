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
    var Quotes = new QuoteService('user');
    Quotes.query().then(function (quotes) {
      $scope.quotes = quotes;
    });
    $scope.isCollapsed = false;
    $scope.removeTagIcon = 'fa-times';
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
  }
]);