/**
 * Created by cicci on 15/07/2017.
 */
function menuShower() {
    var menu = $("#dario");
    var logo = $("#logoDario")
    var posizione = menu.position();
    var headerH = $("#header").height();
    var menuList = $("#menuList")

    $(window).scroll(function() {
        if ($(window).scrollTop() >headerH*0.95 && $( window ).width()>=751) {
            menu.addClass("header__dario");
            menu.removeClass("header__darioHide");
            menu.addClass("animate");
            logo.fadeTo( "slow", 1 );
            menuList.fadeTo("slow", 1 );

        } else {
            menu.removeClass("header__dario");
            menu.addClass("header__darioHide");
            menu.removeClass("animate");

            logo.css({'opacity':'0'});
            logo.stop(true,true);
        }
    });
};