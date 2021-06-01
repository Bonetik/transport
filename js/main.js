$(function () {

    $('.header__burger').on('click', function () {
        $('.header__menu').addClass('header__menu--clouse');
    });

    $('.header__burger').on('click', function () {
        $('.leftside__menu').removeClass('leftside__menu--clouse');
    });

    $('.leftside__menu-clouse').on('click', function () {
        $('.leftside__menu').addClass('leftside__menu--clouse');
        $('.header__menu').removeClass('header__menu--clouse');
    });

    $(".menu_icon").click(function(){
        $(".header__main-menu").toggleClass("show_menu");
        $(".menu_icon").toggleClass("close_menu");
        return false;
    });
    $(".menu_icon-clouse").click(function(){
        $(".header__main-menu").removeClass("show_menu");
        $(".menu_icon").removeClass("close_menu");
        return false;
    });
})
