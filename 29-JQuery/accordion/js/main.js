;(function($) {
	"use strict";
	let accordion = $('.ba-accordion');

	accordion.find('dt').on('click', function(e){
		let clickedContent = $(this).next('dd');
		accordion.find('dd').not(clickedContent).slideUp();
		clickedContent.slideToggle();
	});
})(jQuery);

