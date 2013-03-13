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
			.html('<iframe class="show" width="'+width+'" height="'+height+'" src="http://player.vimeo.com/video/60258924" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')
			.fadeIn(4000);
	}
	
})(jQuery);



//INSTAGRAM PLUGIN
(function($){
  $.fn.instagram = function(options) {

		var defaults = [];
		var options = $.extend(defaults, options);		
		var access_token = '22498578.f59def8.59f50138a23b49208ccf3590e28ffe14';
		var instagramURL = "https://api.instagram.com/v1/users/"+options.hash+"/media/recent?access_token=" + access_token;

		loadPhotos = function() {
			var next_url;
			if (instagramURL !== undefined) {
				$.ajax({
					type: "GET",
					dataType: "jsonp",
					cache: false,
					url: instagramURL,
					success: function(data) {

						for(var i = 0; i < 5; i++) {

							var $item = 
							$('<li />')
								.attr('id', data.data[i].id)
					      .append(
									$('<a>')
										.attr('href', data.data[i].link)
										.attr('rel', "shadowbox[Instagrams];title=<span>photo by @</span>" + data.data[i].user.username)
										.append(
											$('<div>')
										  	.addClass('insta_thumb')
										    .append(
							             $('<img>')
							               .addClass('instagram-image')
							               .attr('src', data.data[i].images.low_resolution.url)
							           )
										)
										.append(
											$('<div>')
										  	.addClass('insta_expand')
												// .append(
												// 	$('<span>')
												// 		.addClass('likes_count')
												// 		.html('&hearts;'+data.data[i].likes.count)
												// )
										)
									);


							$item.hide().appendTo($('#instas')).fadeIn();
						}

						next_url = data.pagination.next_url;
						instagramURL = next_url;

						// Shadowbox.init({ skipSetup:true,overlayOpacity:0.80 }); 
						// Shadowbox.setup();

						// $('button').one('click', function(){
						// 	loadPhotos();
						// });						

					}
				});
			}
		}

		loadPhotos();

  };
})(jQuery);