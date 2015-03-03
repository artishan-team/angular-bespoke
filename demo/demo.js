/**
@toc
1. setup - whitelist, appPath, html5Mode
*/
'use strict';

angular.module('exampleApp', [
	'artishan.bespoke'
])
.controller('DemoController', ['$scope', function($scope) {
	$scope.data = [
		"<h1>Angular-bespoke</h1>",
		"<h2><a href='http://test.com'>slide2</a></h2>",
		"<h3>slide3</h3>",
		'<h2 class="single-words">Single words</h2>',
		'<ul><li>list1</li><li>list2</li><li>list3</li></ul>',
	];
}]);
