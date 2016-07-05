var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {

	$routeProvider
		.when("/", {
			controller: 'bikeController',
			templateUrl: 'views/main.html'
		})
		.when("/bikes/:id", {
			controller: 'DetailController',
			templateUrl: 'views/detail.html'
		})
		.otherwise({
			redirectTo: "/"
		});
});
