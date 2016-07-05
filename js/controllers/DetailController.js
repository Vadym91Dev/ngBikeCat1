app.controller('DetailController', ['$scope', 'library', '$routeParams', function($scope, library, $routeParams) {
	library.success(function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].id === $routeParams.id) {
				$scope.detail = data[i];
			}
		}
	});
}]);
