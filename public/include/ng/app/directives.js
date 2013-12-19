'use strict';

/* Directives */
var quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('qtTag', function(){

	function toggle (bool){
		return bool ? false : true;
	}

	function link(scope, element, attrs) {

			

		element.on("mouseover", function() {
			element.addClass("hover");

			//Show child elements
		});

		var children = element.children();

		for(var i = 0; i < children.length; i++){
			var ele = angular.element(children[i]);

			ele.on("mouseover", function(event){
				event.stopPropagation();
				console.log("wind?");
			});
		}

		element.on("mouseout", function() {
			element.removeClass("hover");
		});

		element.on("$destroy", function() {
			//
			console.log('tag destroyed');
		});

		scope.$watch(attrs.qtTag, function() {

		});
	}

	return {
		link : link
	};
});