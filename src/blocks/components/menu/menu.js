import $ from 'jquery';

$('.menu__item-arrow').on('click', function() {
    let item = $(this).closest('.menu__item');

    item.toggleClass('active');
});


$('.sidebar__top-icon').on('click', function() {
    $(this).toggleClass('close');
    $('.menu').toggleClass('hidden');
});