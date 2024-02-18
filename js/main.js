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

    $('#contact_submit').click(function(e){
        e.preventDefault();
        var myemail = 'trumpet-prelim.0l@icloud.com';
        var name = $('#contact_name').val();
        var email = $('#contact_email').val();
        var subject = $('#contact_subject').val();
        var message = $('#contact_message').val();
        var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0AMessage: ' + message;
        window.location = 'mailto:' + myemail + '?subject=' + subject + '&body=' + body;
    } );

});

jQuery(window).scroll(function() {
    var scrollTop = jQuery(this).scrollTop();
    if (scrollTop > 100) {  
        jQuery('#topbar').addClass('sticky-nav');
    } else {
        jQuery('#topbar').removeClass('sticky-nav');
    }
});
