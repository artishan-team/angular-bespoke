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
			bespokeSlides: '=slides',
		},
		link: function(scope, elem) {
			var slides = scope.bespokeSlides;
			if(slides !== undefined){
				angular.forEach(slides, function(slide){
					var section = angular.element("<section>" + slide + "<section>");
					elem.append(section);
				});
				bespoke.from(elem[0], [
					bespoke.themes.cube(),
					bespoke.plugins.classes(),
					bespoke.plugins.keys(),
					bespoke.plugins.scale(),
					bespoke.plugins.progress()
				]);
			}
		}
	};
}]);
