function typewriterEffect ($element, cite, interval) {
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

function scroll() {
	var scrollValue = window.pageYOffset;
	var header = $('header#principal');
	console.log('window.pageYOffset = ' + scrollValue);
	if (scrollValue > 200) {
		if (!header.hasClass('color2'))	{
			header.addClass('color2');
		}
	} else {
		header.removeClass('color2');
	}
}

$(function() {
	$('#menu').on('click', function () {
		$('header#principal').toggleClass('open');
		$('body').toggleClass('overflow-hidden');
		$('#oculta').toggle();
	});
	//Remembering that you are going to die is the best way i know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.
	var cite = {
		text: 'Recordar que vas a morir es la mejor manera que conozco para evitar la trampa de pensar que tienes algo que perder. Ya estás desnudo. No hay ninguna razón para no seguir tu corazón.',
		author: 'Steve Jobs'
	}
	typewriterEffect($('#cite > blockquote > p'), cite, 50);

	$('#oculta section div').on('click', function (event) {
		var target = event.currentTarget;
		var lang = target.id;
		//Change language page
		$('#oculta section div').removeClass('selected');
		$(target).addClass('selected');
	});

	window.onscroll = scroll; //cuando hacemos scroll llamamos a la función
});