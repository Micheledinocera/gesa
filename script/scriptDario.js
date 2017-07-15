/**
 * Created by cicci on 15/07/2017.
 */
function menuShower() {
    var menu = $("#dario");
    var logo = $("#logoDario")
    var posizione = menu.position();


    $(window).scroll(function() {
        if ($(window).scrollTop() >280+ posizione.top&&$( window ).width()>=751) {
            menu.addClass("header__dario");
            menu.removeClass("header__darioHide");
            //
            logo.fadeTo( "slow", 1 );

        } else {
            menu.removeClass("header__dario");
            menu.addClass("header__darioHide");
            logo.css({'opacity':'0'});
            logo.stop(true,true);
        }
    });
};