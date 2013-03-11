(function($) {
	
	$('a.play-button').click(function(e){
		$('.splash').fadeOut(function() {
			start_video('wyqxEIgWkAE','900','534');
		});
		e.preventDefault();
	});
	
	function start_video(id, width, height) {
	  $(".video")
			.hide()
			.html('<iframe class="show" width="'+width+'" height="'+height+'" src="https://www.youtube.com/v/'+id+'?autoplay=1;showinfo=0;wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')
			.fadeIn(4000);
	}
	
})(jQuery);