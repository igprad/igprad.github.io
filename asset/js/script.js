	var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

	myApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	myApp.controller('mainController', function($scope) {
		$scope.slide=[
			{image : 'img/blibli-future.jpg',description : 'Program Future Blibli'},
			{image : 'img/igprad.jpg',description : 'This is me'}
		];
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});