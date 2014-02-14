$(document).ready(function() {
		$window = $(window);

		// Parallax
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $('#parallax').data('speed') - 280);
			// Put together our final background position
			var coords = '50%' + yPos + 'px';
			// Move the background
			$('#parallax').css({
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
			$("ul.nav").slideToggle("normal");
			$("ul.nav").addClass("expanded");
			return false;
		});

		$("ul.nav a").click(function(){
			$("ul.expanded").slideToggle("fast");
			return false;
		});

		$.localScroll({offset:-50});

});