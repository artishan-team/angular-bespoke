/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('artishan.bespoke', []).directive('bespoke', [ function () {

	return {
		restrict: 'AE',
		scope: {
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
			console.log(element);
			var html = "<section>Slide 1</section>";
					html += "<section>Slide 2</section>";
					html += "<section>Slide 3</section>";
			// var html = "<article id='presentation'>";
			// 		html += "<section>Slide 1</section>";
			// 		html += "<section>Slide 2</section>";
			// 		html += "<section>Slide 3</section>";
			// 		html += "</article>";
			console.log(html);
			return html;
		},

		link: function(scope, element, attrs) {

		},

		controller: function($scope, $element, $attrs) {
			var deck = bespoke.from($element[0], [
				bespoke.themes.cube(),
				bespoke.plugins.classes(),
  			bespoke.plugins.keys(),
				bespoke.plugins.scale(),
				bespoke.plugins.progress()
			]);
		}
	};
}]);
