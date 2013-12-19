'use strict';

/* Directives */
var quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('qtIndTag', function(){

	function link(scope, element, attrs) {

		//Toggle showing controls
		element.hover(function(event){
			angular.element(this).find("span:first").addClass("hover");
		}, function(event){
			angular.element(this).find("span:first").removeClass("hover");
		});


		element.on("$destroy", function() {
			
		});

		scope.$watch(attrs.qtIndTag, function() {

		});
	}

	return {
		link : link,
		restrict: 'E',
		templateUrl: 'include/ng/partials/ind-tag.html'
	};
});

quoteDirectives.directive('qtDepTag', function() {

	function link(scope, element, attrs) {
		//Toggle showing controls
		element.hover(function(event){
			angular.element(this).find("span:first").addClass("hover");
		}, function(event){
			angular.element(this).find("span:first").removeClass("hover");
		});


		element.find("i.remove-tag").click(function(event) {
			//console.log(attrs);

			/*var quote = scope.quotes.filter(function(qt) {
				return qt.id == scope.quoteId;
			});*/

			scope.removeTag(attrs.quoteId, scope.tag.id);

			//quote[0].removeTag(scope.tag.id);

		});


		element.on("$destroy", function() {
			
		});

		scope.$watch(attrs.qtDepTag, function() {

		});
	}

	return {
		link : link,
		restrict: 'E',
		templateUrl: 'include/ng/partials/dep-tag.html'
	};
});