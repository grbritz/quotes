angular.module('qt.services', ['ngResource']).factory('QuoteService', [
  '$http',
  function ($http) {
    return function (publicOrPrivate) {
      var collectionUrl = 'quotes/' + publicOrPrivate;
      var defaultParams = {};
      var Resource = function (data) {
        angular.extend(this, data);
      };
      Resource.query = function (params) {
        return $http.get(collectionUrl, { params: angular.extend({ q: JSON.stringify({} || params) }, defaultParams) }).then(function (response) {
          var result = [];
          angular.forEach(response.data, function (value, key) {
            result[key] = new Resource(value);
          });
          return result;
        });
      };
      Resource.random = function (tags) {
        return $http.get(collectionUrl + '/random', { params: angual.extend({ tags: tags }, defaultParams) }).then(function (response) {
          return response.data;
        });
      };
      Resource.get = function (id) {
        return $http.get(collectionUrl, { params: angular.extend({ id: id }, defaultParams) }).then(function (response) {
          return response.data;
        });
      };
      Resource.remove = function (id) {
        return $http.remove(collectionUrl, { params: angular.extend({ id: id }, defaultParams) }).then(function (response) {
          return new Resource(data);
        }, function (response) {
          console.log('Error - Could not delete quote : ' + response);
        });
      };
      Resource.save = function (data) {
        return $http.post(collectionUrl, data, { params: defaultParams }).then(function (response) {
          return new Resource(data);
        }, function (response) {
          console.log('Error - Could not save quote : ' + response);
        });
      };
      Resource.$save = function (data) {
        return Resource.save(this);
      };
      return Resource;
    };
  }
]).factory('Tag', [
  '$resource',
  function ($resource) {
    var TagService = {};
    TagService.resource = $resource('tags/user');
    return TagService;
  }
]).factory('PublicQuotes', [
  '$resource',
  function ($resource) {
    return $resource('quotes/public/:id', { id: '@id' }, {
      random: {
        method: 'GET',
        params: { id: 'random' }
      }
    });
  }
]);