/**
 * Created by cicci on 15/07/2017.
 */
function menuShower() {
    var menu = $("#dario");
    var logo = $("#logoDario")
    var posizione = menu.position();
    var headerH = $("#header").height();
    var menuListMin = $("#menuList_min");
    var menuList = $("#menuList");
    var children = menuList.children();

    $(window).scroll(function() {
        if ($(window).scrollTop() >headerH && $( window ).width()>=751) {

            menu.addClass("animate");
            menuListMin.append(children);

            menu.addClass("header__dario");
            menu.removeClass("header__darioHide");

            logo.fadeTo( "slow", 1 );
            menuListMin.fadeTo( "slow", 1 );

        } else {
            menu.removeClass("animate");
            menuList.append(children);

            menu.removeClass("header__dario");
            menu.addClass("header__darioHide");

            logo.css({'opacity':'0'});
            logo.stop(true,true);

            menuListMin.css({'opacity':'0'});
            menuListMin.stop(true,true);
        }
    });
};