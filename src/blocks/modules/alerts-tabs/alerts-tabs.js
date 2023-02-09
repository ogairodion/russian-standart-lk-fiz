import $ from 'jquery';

let items       = $('.alerts-tabs__item'),
    tabs        = $('.alerts-tabs__tab'),
    btnNext     = $('.btn--next'),
    btnPrev     = $('.btn--prev'),
    currentStep = 0,
    steps       = items.length;

$('.form__radio-prices input[type="radio"]').on('change', function() {
    $('.form__radio-prices').removeClass('active');
    let parent = $(this).closest('.form__radio');
    if ($(this).is(':checked')) {
        $(parent).addClass('active');
    } else {
        $(parent).removeClass('active');
    }
});

$('.form__radio-row input[type="radio"]').on('change', function() {
    $('.form__radios-row').removeClass('active');
    let parent = $(this).closest('.form__radio');
    if ($(this).is(':checked')) {
        $(parent).addClass('active');
    } else {
        $(parent).removeClass('active');
    }
});

btnNext.on('click', function(e) {
    e.preventDefault();

    if (currentStep < steps - 1) {
        currentStep++;
        tabs.removeClass('active');
        $(tabs[currentStep]).addClass('active');
        items.removeClass('active');
        $(items[currentStep]).addClass('active');
    }
});

btnPrev.on('click', function(e) {
    e.preventDefault();

    if (currentStep > 0) {
        currentStep--;
        tabs.removeClass('active');
        $(tabs[currentStep]).addClass('active');
        items.removeClass('active');
        $(items[currentStep]).addClass('active');
    }
});
