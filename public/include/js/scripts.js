// vertically center main big quote
(function () {
	var $win = $(window);
	var $quote = $('#discover-quote');
	function sizeToFit($quote, $win) {
		if ($quote.innerHeight() > $win.innerHeight()) {
			$el.css({'margin-top': '20px'});
		} else {
			verticallyCenter($quote, $win);
		}
	}
	function verticallyCenter($el, $box) {
		var elHeight = $el.innerHeight();
		var boxHeight = $box.innerHeight();
		var newTop = boxHeight / 2 - elHeight / 2;
		$el.css({'margin-top': newTop + 'px'});
	}
	// initial execution
	sizeToFit($quote, $win);
	// resize execution
	$(window).resize(function () {
		sizeToFit($quote, $win);
	});
})();