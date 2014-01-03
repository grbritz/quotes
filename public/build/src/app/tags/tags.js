angular.module('qt.tags', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('tags', {
      url: '/tags',
      views: {
        'main': {
          controller: 'TagsCtrl',
          templateUrl: 'tags/tags.tpl.html'
        }
      },
      data: 'List your tags'
    });
  }
]).controller('TagsCtrl', [
  '$scope',
  'Tag',
  function QuotesCtrl($scope, Tag) {
    $scope.tags = Tag.resource.query();
    $scope.removeTagIcon = 'fa-trash-o';
    $scope.confirmDeleteTags = false;
    $scope.tagsToDelete = [];
    $scope.removeTag = function (removeInfo) {
      var tagId = removeInfo.tagId;
      $scope.confirmDeleteTags = true;
      $scope.tagsToDelete.push(tagId);
      $scope.tags = $scope.tags.filter(function (ele) {
        return ele.id != tagId;
      });
    };
    $scope.deleteTags = function () {
      $scope.confirmDeleteTags = false;
    };
    $scope.cancelDeleteTags = function () {
      $scope.confirmDeleteTags = false;
      $scope.tags = Tag.resource.query();
    };
  }
]);