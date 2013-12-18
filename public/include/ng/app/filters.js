'use strict';

/* Filters */

var quoteFilters = angular.module('quoteFilters', []);

/*quoteFilters.filter('tagFilter', function(){
	return function(input, filters) {
		console.log(input);
		console.log(filters);
		return filters.length > 0;

		/*return tagFilters.filter(function(element){
			return tag.name == element;
		}).length > 0;*/
	//}
//});


/*angular.module('QuoteFilters', []).filter('tagFilter', function(tagFilters) {
	return function(tag) {
		return tagFilters.filter(function(element){
			return tag.name == element;
		}) > 0;
		
		//return tag.name == tagFilter;
	}
});*/