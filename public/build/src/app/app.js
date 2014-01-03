angular.module('quotes', [
  'templates-app',
  'templates-common',
  'qt.discover',
  'qt.quotes',
  'qt.tags',
  'ui.router',
  'ui.bootstrap',
  'qt.services',
  'qt.filters'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/discover');
  }
]).run(function run() {
}).controller('AppCtrl', [
  '$scope',
  '$location',
  function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle + ' | Quotes';
      }
    });
    $scope.isActiveUrl = function (path) {
      return $location.path().substr(0, path.length) === path;
    };
  }
]);