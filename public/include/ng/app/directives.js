'use strict';

/* Directives */
var quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('qtTag', function() {
	function link(scope, element, attrs) {

		/**
		 * Removes a tag from a quote and updates view
		 * @param  event
		 * @return void
		 */
		element.find(".remove-tag").click(function(event) {
			var param = {};
			angular.extend(param, attrs, {tagId : scope.tag.id });
			scope.$apply(scope.removeTag(param));
		});



		element.on("$destroy", function() {
			
		});

		scope.$watch(attrs.qtDepTag, function() {

		});
	}

	return {
		link : link,
		restrict: 'E',
		replace : true,
		templateUrl: 'include/ng/partials/directives/tag.html'
	};
});