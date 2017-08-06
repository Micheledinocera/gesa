/**
 * Created by cicci on 15/07/2017.
 */
function menuShower() {
    var menu = $("#dario");
    var logo = $("#logoDario");
    logo.css({'opacity':'0'});
    var posizione = menu.position();
    var headerH = $("#header").height();
    var menuListMin = $("#menuList_min");
    var menuList = $("#menuList");
    var children = menuList.children();

    $(window).scroll(function() {
        if ($(window).scrollTop() >headerH && $( window ).width()>=850) {

            menu.addClass("animate");
            menuListMin.append(children);
            menuListMin.children().removeClass("header__menu__item");
            menuListMin.children().addClass("header__menu__item__dario");

            menu.addClass("header__dario");
            menu.removeClass("header__darioHide");

            logo.fadeTo( "slow", 1 );
            menuListMin.fadeTo( "slow", 1 );

        } else {
            menu.removeClass("animate");
            menuList.append(children);

            menu.removeClass("header__dario");
            menu.addClass("header__darioHide");
            menuListMin.children().css({'width':'auto'});
            logo.css({'opacity':'0'});
            logo.stop(true,true);

            menuListMin.css({'opacity':'0'});
            menuList.children().removeClass("header__menu__item__dario");
            menuList.children().addClass("header__menu__item");
            menuListMin.stop(true,true);
        }
    });
};