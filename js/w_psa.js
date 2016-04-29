/**
 * Created by Evan on 16/4/26.
 */
$(function(){
    var intro = $('#psa_intro_1');
    var nav = $('#nav_bar');
    nav.addClass('dark_content');
    dark_now = true;
    $(window).bind("scroll",function () {
        if($(window).scrollTop()>intro.position().top){
            nav.removeClass();
            dark_now = false;
        }
        else{
            nav.addClass('dark_content');
            dark_now = true;
        }
    });
});
