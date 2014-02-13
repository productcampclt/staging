$(document).ready(function() {
		$window = $(window);

		// Parallax
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $('#parallax').data('speed') - 280);
			// Put together our final background position
			var coords = '50%' + yPos + 'px';
			// Move the background
			$('#foo').css({
				backgroundPosition: coords
			});
		});

		//when top hits the first cta btn, run this
	//	$("#parallax").waypoint(function() {
	//		$(".ipad").addClass("anim");
	//		$(".text").addClass("anim");
	//	}, { offset: '20%'});

		// Navigation

	/*	$(".header a").click(function(){
			$("header li").removeClass("active");
			$(this).parent().addClass("active");
		});

		/* $('body').scrollspy({ target: 'header' }) */
		/* $('header').scrollspy();*/


		$("a.mini-nav").click(function(){
			$("ul.nav").slideToggle("slow");
			return false;
		});

		$.localScroll({offset:-50});

});