function scroll() {
	var scrollValue = window.pageYOffset;
	var header = $('header#principal');
	if (scrollValue > 200) {
		if (!header.hasClass('color2'))	{
			header.addClass('color2');
		}
	} else {
		header.removeClass('color2');
	}
}

$(function() {
	window.onscroll = scroll;
});