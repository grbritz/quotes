'use strict';

/* Directives */
var quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('qtIndTag', function(){

	function link(scope, element, attrs) {

		//Toggle showing controls
		element.hover(function(event){
			//angular.element(this).find("span:first").addClass("hover");
		}, function(event){
			//angular.element(this).find("span:first").removeClass("hover");
		});


		element.on("$destroy", function() {
			
		});

		scope.$watch(attrs.qtIndTag, function() {

		});
	}

	return {
		link : link,
		restrict: 'E',
		replace : true,
		templateUrl: 'include/ng/partials/directives/ind-tag.html'
	};
});

quoteDirectives.directive('qtDepTag', function() {

	function link(scope, element, attrs) {
		//Toggle showing controls
		element.hover(function(event){
			//angular.element(this).find("span:first").addClass("hover");
		}, function(event){
			//angular.element(this).find("span:first").removeClass("hover");
		});


		/**
		 * Removes a tag from a quote and updates view
		 * @param  event
		 * @return void
		 */
		element.find("i.remove-tag").click(function(event) {
			scope.$apply(scope.removeTag(attrs.quoteId, scope.tag.id));
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
		templateUrl: 'include/ng/partials/directives/dep-tag.html'
	};
});