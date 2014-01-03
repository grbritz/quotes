angular.module('qt.filters', []).filter('tagFilter', function () {
  return function (input, filters) {
    if (filters && filters.length > 0) {
      return input.filter(function (currentInput) {
        return filters.filter(function (currentFilter) {
          return currentInput.name.toLowerCase().indexOf(currentFilter.toLowerCase()) != -1;
        }).length > 0;
      });
    } else {
      return input;
    }
  };
}).filter('greedySearch', function () {
  return function (inputs, filters) {
    if (filters && filters.length > 0) {
      return inputs.filter(function (input) {
        return filters.filter(function (filter) {
          return Object.keys(input).filter(function (key) {
            var typeInput = typeof input[key], typeFilter = typeof filter;
            if (typeInput != typeFilter) {
              return false;
            }
            switch (typeInput) {
            case 'string':
              return input[key].toLowerCase().indexOf(filter.toLowerCase()) != -1;
            case 'number':
              return input[key] == filter;
            default:
              return false;
            }
          }).length > 0;
        }).length > 0;
      });
    } else {
      return inputs;
    }
  };
});