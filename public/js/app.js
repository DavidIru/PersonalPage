(function () {
	var app = angular.module('Portfolio', [
		'ngRoute',
		'PortfolioControllers',
		'PortfolioDirectives'
	]);

	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/about-me', {
				templateUrl: 'views/about-me.html'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html'
			})
			.when('/projects', {
				templateUrl: 'views/projects.html'
			})
			.when('/skills', {
				templateUrl: 'views/skills.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		//$locationProvider.html5Mode(true);
	}]);
})();