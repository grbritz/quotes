'use strict';

/* Directives */
var quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('qtTag', function(){

	var isHovered = false;

	function toggle (bool){
		return bool ? false : true;
	}

	function link(scope, element, attrs) {

			

		element.on("mouseover", function() {
			if(this.hasAttribute("qt-tag")){
				console.log("win!");
			}

			if(isHovered){
				return;
			}
			
			isHovered = true;

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
			//isHovered = false;
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