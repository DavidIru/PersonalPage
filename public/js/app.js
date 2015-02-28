(function () {
	var app = angular.module('CVDavidIruzubieta', [
		'ngRoute'
	]);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html'
			})
			.when('/about', {
				templateUrl: 'views/about.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
})();