app.factory('library', ['$http', function($http) {
	return $http.get('https://api.myjson.com/bins/uoet')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);
