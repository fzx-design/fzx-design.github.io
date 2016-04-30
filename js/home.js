/**
 * fzx home page exclusive script file
 * Created by Evan on 16/3/25.
 */
$(function () {
    //Hero object constructor
    function HeroObject(index){
        this.hero_id = "hero" + index;
        this.img_src = "";
        this.link_to = "";
        this.bg_position = "center";
        this.is_dark = false;//dark or bright
        this.project_name = "Project";
        this.hero_cat = "work";
        this.project_year = "2000";
        var html_con = [];
        this.getHtml = function(){
            html_con.push("<div class='swiper-slide",this.is_dark?" dark_slide":"","'><a href='",this.link_to,"'>");
            html_con.push("<div class='hero' id='",this.hero_id);
            html_con.push("' style='background-image: url(",this.img_src,");background-position:",this.bg_position,"'>");
            html_con.push("<div class='",this.is_dark?"splash_info_dark":"splash_info","'>");
            html_con.push("<div class='project_name'>",this.project_name,"</div>");
            html_con.push("<div class='year'><div class='tag'>",this.hero_cat,"</div> ",this.project_year,"</div>");
            html_con.push("</div></div></a></div>");
            return html_con.join("");
        }
    }
    //Get src JSON array
    var hero_src_array = [
        {
            "img_src":"img/cover-hero_psa12.jpg",
            "is_dark":1,
            "link_to":"w_psa.html",
            "project_name":"PSA-Tongji HMI Design Research",
            "project_year":"2013",
            "hero_cat":"project",
            "bg_position":"top"
        },
        {
            "img_src":"img/cover-hero_dcbb.jpg",
            "is_dark":0,
            "link_to":"w_dbrush.html",
            "project_name":"Digital Chinese Brush Bundle",
            "project_year":"2016",
            "hero_cat":"concept",
            "bg_position":"center"
        },
        {
            "img_src":"img/cover-hero_trims.jpg",
            "is_dark":1,
            "link_to":"w_trims.html",
            "project_name":"trims",
            "project_year":"2014",
            "hero_cat":"project",
            "bg_position":"center"
        }
    ];
    //Construct hero object array
    var heroes = [];
    var hero_count = hero_src_array.length;
    for(var i=0;i<hero_count;i++){
        heroes[i] = new HeroObject(i);
        heroes[i].img_src = hero_src_array[i].img_src;
        heroes[i].is_dark = hero_src_array[i].is_dark;
        heroes[i].link_to = hero_src_array[i].link_to;
        heroes[i].project_name = hero_src_array[i].project_name;
        heroes[i].project_year = hero_src_array[i].project_year;
        heroes[i].hero_cat = hero_src_array[i].hero_cat;
        heroes[i].bg_position = hero_src_array[i].bg_position;
        console.log(heroes[i].is_dark);
    }
    // console.log(heroes.length);
    //Append HTML content
    var hero_gallery = $("#hero_wrap");
    var paging_container = $("#paging");
    var s_pre = $('#pre');
    var s_next = $('#next');
    var nav = $("#nav_bar");
    for(var j=0;j<hero_count;j++){
        hero_gallery.append(heroes[j].getHtml());
        console.log("Hero"+j+" appended.");
    }
    if(is_mobile){
        s_next.css({display:'none'});
        s_pre.css({display:'none'});
    }
    if(heroes[0].is_dark){
        dark_now = true;
        nav.addClass("dark_content");
        paging_container.addClass('dark_content');
        s_pre.addClass('pre_white');
        s_next.addClass('next_white');
    }
    else{
        s_pre.addClass('pre_black');
        s_next.addClass('next_black');
    }

    //Set loop
    var fzx_swiper = new Swiper('.swiper-container',{
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: false,
        simulateTouch: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        speed: 1000
    });
    var current_hero;
    fzx_swiper.on("onSlideChangeStart", function () {
        current_hero = fzx_swiper.slides[fzx_swiper.activeIndex];
        if($(current_hero).hasClass('dark_slide')){
            dark_now = true;
            paging_container.addClass('dark_content');
            s_pre.removeClass('pre_black');
            s_next.removeClass('next_black');
            s_pre.addClass('pre_white');
            s_next.addClass('next_white');
            if(!menu_show) nav.addClass('dark_content');
        }
        else{
            dark_now = false;
            nav.removeClass();
            s_pre.removeClass('pre_white');
            s_next.removeClass('next_white');
            s_pre.addClass('pre_black');
            s_next.addClass('next_black');
            paging_container.removeClass('dark_content');
        }
    });
});//end jQuery