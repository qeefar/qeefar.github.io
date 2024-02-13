jQuery(document).ready(function($) {

    $('.page-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1100, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#navbtn').click(function(){
		if($('.navbar-nav').is(':hidden')){
			$('.navbar-nav').slideDown();
            $(this).addClass('collapsed');
		}else{
			$('.navbar-nav').slideUp();
            $(this).removeClass('collapsed');
		}
	});        

	$('.page-link').click(function(){
		if($('#navbtn').is(':visible')){
			$('.navbar-nav').slideUp();
		}
	});

	$('body').scrollspy({
        target: '.navbar',
        offset: 51
    });

    $('.carousel').carousel({
	  	interval: false
	}); 

});

jQuery(window).scroll(function() {
    var scrollTop = jQuery(this).scrollTop();
    if (scrollTop > 100) {  
        jQuery('#topbar').addClass('sticky-nav');
    } else {
        jQuery('#topbar').removeClass('sticky-nav');
    }
});