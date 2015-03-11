(function () {
	angular.module('PortfolioControllers', [])
		.controller('HomeController', ['$scope', '$routeParams', function ($scope, $routeParams) {
			$scope.projects = [
				{
					id: 1,
					title: 'COIIAR - Colegio Oficial de Ingenieros Industriales',
					image: '/img/works/coiiar.png',
					description: 'Encargado del rediseño y desarrollo completo de la plataforma web del Colegio Oficial de Ingenieros Industriales de Aragón y de La Rioja (COIIAR).  En este puesto he trabajado con PHP5, Javascript (jQuery), HTML5 y CSS3. Actualmente colaboro con ellos de manera puntual para tareas de mantenimiento.',
					tags: [
						'PHP',
						'HTML5',
						'CSS3',
						'Javascript',
						'jQuery',
						'MySQL'
					]
				},
				{
					id: 2,
					title: 'COIIAR 2 - Colegio Oficial de Ingenieros Industriales',
					image: '/img/works/coiiar.png',
					description: 'Encargado del rediseño y desarrollo completo de la plataforma web del Colegio Oficial de Ingenieros Industriales de Aragón y de La Rioja (COIIAR).  En este puesto he trabajado con PHP5, Javascript (jQuery), HTML5 y CSS3. Actualmente colaboro con ellos de manera puntual para tareas de mantenimiento.',
					tags: [
						'PHP',
						'HTML5',
						'CSS3',
						'Javascript',
						'jQuery',
						'MySQL'
					]
				},
				{
					id: 3,
					title: 'COIIAR 3 - Colegio Oficial de Ingenieros Industriales',
					image: '/img/works/coiiar.png',
					description: 'Encargado del rediseño y desarrollo completo de la plataforma web del Colegio Oficial de Ingenieros Industriales de Aragón y de La Rioja (COIIAR).  En este puesto he trabajado con PHP5, Javascript (jQuery), HTML5 y CSS3. Actualmente colaboro con ellos de manera puntual para tareas de mantenimiento.',
					tags: [
						'PHP',
						'HTML5',
						'CSS3',
						'Javascript',
						'jQuery',
						'MySQL'
					]
				},
				{
					id: 4,
					title: 'COIIAR 4 - Colegio Oficial de Ingenieros Industriales',
					image: '/img/works/coiiar.png',
					description: 'Encargado del rediseño y desarrollo completo de la plataforma web del Colegio Oficial de Ingenieros Industriales de Aragón y de La Rioja (COIIAR).  En este puesto he trabajado con PHP5, Javascript (jQuery), HTML5 y CSS3. Actualmente colaboro con ellos de manera puntual para tareas de mantenimiento.',
					tags: [
						'PHP',
						'HTML5',
						'CSS3',
						'Javascript',
						'jQuery',
						'MySQL'
					]
				},
				{
					id: 5,
					title: 'COIIAR 5 - Colegio Oficial de Ingenieros Industriales',
					image: '/img/works/coiiar.png',
					description: 'Encargado del rediseño y desarrollo completo de la plataforma web del Colegio Oficial de Ingenieros Industriales de Aragón y de La Rioja (COIIAR).  En este puesto he trabajado con PHP5, Javascript (jQuery), HTML5 y CSS3. Actualmente colaboro con ellos de manera puntual para tareas de mantenimiento.',
					tags: [
						'PHP',
						'HTML5',
						'CSS3',
						'Javascript',
						'jQuery',
						'MySQL'
					]
				}
			];
		}])
		.controller('MenuButtonController', ['$scope', function ($scope) {
			$('#menu').on('click', function () {
				$('header#principal').toggleClass('open');
				$('body').toggleClass('overflow-hidden');
				$('#oculta').toggle();
			});
		}])
		.controller('LanguageSelectorController', ['$scope', function ($scope) {
			$('#oculta section div').on('click', function (event) {
				var target = event.currentTarget;
				var lang = target.id;
				//Change language page
				$('#oculta section div').removeClass('selected');
				$(target).addClass('selected');
			});
		}])
		.controller('CiteController', ['$scope', function ($scope) {
			//Remembering that you are going to die is the best way i know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.
			this.cite = {
				text: 'Recordar que vas a morir es la mejor manera que conozco para evitar la trampa de pensar que tienes algo que perder. Ya estás desnudo. No hay ninguna razón para no seguir tu corazón.',
				author: 'Steve Jobs'
			};

			this.typewriterEffect = function ($element, cite, interval) {
				var textLong = cite.text.length;
				counter = 0;
				var effect = function ($element, cite, textLong) {
					var content = $element.html();
					$element.html(content.substr(0, content.length-1) + cite.text.charAt(counter++) + "_");
					if(counter > textLong) {
						clearInterval(timer);
						$element.html(content.substr(0, textLong));
						$('#cite > blockquote > cite').html(cite.author);
						$('#cite > blockquote > cite').fadeIn('slow').css('display', 'block');
					}
				};

				var timer = setInterval(effect ,interval, $element, cite, textLong);
			};

			this.typewriterEffect($('#cite > blockquote > p'), this.cite, 50);
		}]);
})();