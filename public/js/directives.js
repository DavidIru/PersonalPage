(function () {
	angular.module('PortfolioDirectives', [])
		.directive('projectTitle', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/project/title.html'
			};
		})
		.directive('projectImage', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/project/image.html'
			};
		})
		.directive('projectDescription', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/project/description.html'
			};
		})
		.directive('projectTags', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/project/tags.html'
			};
		})
		.directive('citeHome', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/cite.html'
			};
		})
		.directive('menuButton', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/menu-button.html'
			};
		})
		.directive('languageSelector', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/language-selector.html'
			};
		});
})();