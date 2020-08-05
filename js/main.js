$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300)
			$('i.first-icon').css({
				opacity: '1',
				'pointer-events': 'auto'
			});
		else {
			$('i.first-icon').css({
				opacity: '0',
				'pointer-events': 'none'
			});
		}
	});
	$('i.first-icon').click(function() {
		$('html').animate({ scrollTop: 0 }, 500);
	});
});
