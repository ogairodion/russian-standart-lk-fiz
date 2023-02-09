import $ from 'jquery';
global.$ = global.jQuery = $;
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";
import Swiper from 'swiper';

let windowWidth; 

windowWidth = $(window).width();
adaptive(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptive(windowWidth);
});

$("select").each(function(){
    var $this = $(this), 
    numberOfOptions = $(this).children("option").length;
  
    $this.addClass("select-hidden"); 
    $this.wrap("<div class=\"select\"></div>");
    $this.after("<div class=\"select-styled\"></div>");

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());
  
    var $list = $("<ul />", {
        "class": "select-options"
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
            text: $this.children("option").eq(i).text(),
            rel: $this.children("option").eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children("li");
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $("div.select-styled.active").not(this).each(function(){
            $(this).removeClass("active").next("ul.select-options").hide();
            $this.removeClass("active");
        });
        $(this).toggleClass("active").next("ul.select-options").toggle();
        $this.parent().toggleClass("active");
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.parent().removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass("active");
        $this.parent().removeClass("active");
        $list.hide();
    });

});

$('.dropdown-top').on('click', function() {
    let dropdown = $(this).closest('.dropdown');
    $(dropdown).toggleClass('open');
});

function adaptive(windowWidth) {
    switch(true) {
        case windowWidth < 767 && $('.menu .header__link').length === 0:
            $('.menu').append($('.header__link'));
            $('.menu').append($('.header__status'));
        break; 
        case windowWidth > 767 && $('.header .header__link').length === 0:
            $('.header__wrapper').append($('.header__link'));
            $('.header__wrapper').append($('.header__status'));
        break; 
    }
}

$('.header__burger').on('click', function() {
    $('body, html').toggleClass('menu--open');
});

const tableSlider = new Swiper(".table-slider", {
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    freeMode: true,
});