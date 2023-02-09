import $ from 'jquery';

let windowWidth; 

windowWidth = $(window).width();

$(window).on('resize', function() {
    windowWidth = $(window).width();
});

$('.message').each(function(i) {
    $(this).attr('data-id', i);
});

$('.services__item-question').on('click', function(e) {
    e.preventDefault();
    if (windowWidth < 991) {
        let $this = $(this);
        let message = $('.message', $(this));
        
        $('.message').each(function(i) {
            if (message.attr('data-id') == $(this).attr('data-id')) {
                message.toggleClass('open');
            } else {
                $(this).removeClass('open');
            }
        });
    }
});