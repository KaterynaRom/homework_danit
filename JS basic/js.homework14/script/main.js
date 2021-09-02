$(document).ready(function(){
    $(".nav-menu").on("click","a", function () {
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// **********************************

$(document).ready(function() {
    const button = $('.up-button');
    $(window).scroll (function () {
        if ($(this).scrollTop () > window.innerHeight) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

// ****************************************

$(document).ready(function(){
    $('.display-button').click(function(){
        $('.display-content').slideToggle(1000);
        return false;
    });
});