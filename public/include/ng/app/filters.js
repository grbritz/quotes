'use strict';

/* Filters */

var quoteFilters = angular.module('quoteFilters', []);

quoteFilters.filter('tagFilter', function(){
	return function(input, filters) {
		if(filters && filters.length > 0){
			return input.filter(function(currentInput) {
				return filters.filter(function(currentFilter) {
					return currentInput.name.indexOf(currentFilter) != -1;
				}).length > 0;
			});
		}
		else{
			return input;
		}
	}	
});	

