app.controller('bikeController',['$scope', 'library', function($scope, library) {
	library.success(function(data) {
		$scope.bikes = data;
	});
}]);

