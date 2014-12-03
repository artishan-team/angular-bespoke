/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('exampleApp', [
'ngRoute',
'ngSanitize',
'ngTouch',
'ngAnimate',
'artishan.bespoke'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server

	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/angular-bespoke/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/angular-bespoke/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';


	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});

}])
.controller('DemoController', ['$scope', function($scope) {
	$scope.data = [
		"<h1>slide1</h1>",
		"<h2>slide2</h2>",
		"<h3>slide3</h3>"
	];
}]);
