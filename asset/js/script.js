	var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

	myApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			
			.when('/project', {
				templateUrl : 'pages/project.html',
				controller  : 'projectController'
			});
	});

	myApp.controller('mainController', function($scope) {
		$scope.slide=[
			{image : 'img/blibli-future.jpg',description : 'Program Future Blibli'},
			{image : 'img/igprad.jpg',description : 'This is me'}
		];
	});

	myApp.controller('projectController', function($scope) {
		$scope.message = 'Comming soon :(';
	});