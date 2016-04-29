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
            html_con.push("<a href='",this.link_to,"'>");
            html_con.push("<div class='hero' id='",this.hero_id);
            html_con.push("' style='background-image: url(",this.img_src,");background-position:",this.bg_position,"'>");
            html_con.push("<div class='",this.is_dark?"splash_info_dark":"splash_info","'>");
            html_con.push("<div class='project_name'>",this.project_name,"</div>");
            html_con.push("<div class='year'><div class='tag'>",this.hero_cat,"</div> ",this.project_year,"</div>");
            html_con.push("</div></div></a>");
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
    var loop_time = 5000;
    var hero_gallery = $("#hero_container");
    var paging_container = $("#paging");
    var nav = $("#nav_bar");
    for(var j=0;j<hero_count;j++){
        hero_gallery.append(heroes[j].getHtml());
        paging_container.append("<div class='page_dot'></div>");
        console.log("Hero"+j+" appended.");
    }
    var current_hero_id = 0;
    var next_hero_id = 1;
    var pre_hero_id = hero_count-1;
    var main_loop;
    function showHero(hero_index) {
        // reset
        $("#hero"+next_hero_id).css({transitionProperty:"none",transitionDuration:"0",filter:"brightness(1)","-webkit-filter":"brightness(1)",transform:"translate(100%,0)"});
        // console.log("hero "+next_hero_id+" reset");
        dark_now = false;
        nav.removeClass();
        paging_container.removeClass();
        current_hero_id = hero_index; //if pass the index manually
        //move
        $("#hero"+hero_index).css({transitionProperty:"all",transitionDuration:"1s",filter:"brightness(1)","-webkit-filter":"brightness(1)",transform:"translate(0,0)"});
        $("#hero"+pre_hero_id).css({transitionProperty:"all",transitionDuration:"1s",filter:"brightness(0.5)","-webkit-filter":"brightness(0.5)",transform:"translate(-100%,0)"});
        // console.log("hero "+hero_index+" shown");
        paging_container.find("div").removeClass("dot_hover");
        //reset previous
        paging_container.find(":nth-child("+(hero_index+1)+")").addClass("dot_hover");
        if(heroes[hero_index].is_dark){
            dark_now = true;
            nav.addClass("dark_content");
            paging_container.addClass("dark_content");
        }
    }
    function showHeroP(hero_index) {
        //reset
        $("#hero"+pre_hero_id).css({transitionProperty:"none",transitionDuration:"0",filter:"brightness(1)","-webkit-filter":"brightness(1)",transform:"translate(-100%,0)"});
        nav.removeClass();
        paging_container.removeClass();
        //move
        $("#hero"+hero_index).css({transitionProperty:"all",transitionDuration:"1s",filter:"brightness(1)","-webkit-filter":"brightness(1)",transform:"translate(0,0)"});
        $("#hero"+next_hero_id).css({transitionProperty:"all",transitionDuration:"1s",filter:"brightness(.5)","-webkit-filter":"brightness(.5)",transform:"translate(100%,0)"});

        paging_container.find("div").removeClass("dot_hover");
        paging_container.find(":nth-child("+(current_hero_id+1)+")").addClass("dot_hover");
        if(heroes[hero_index].is_dark){
            nav.addClass("dark_content");
            paging_container.addClass("dark_content");
        }
    }
    function nextHero() {
        if(menu_show){
            return;
        }
        pre_hero_id = current_hero_id;
        if(current_hero_id==0){
            current_hero_id++;
            next_hero_id = current_hero_id+1;
        }
        else if(current_hero_id==(hero_count-1)){
            current_hero_id = 0;
            next_hero_id = current_hero_id+1;
        }
        else{
            current_hero_id++;
            if(current_hero_id==(hero_count-1)){
                next_hero_id = 0;
            }
            else next_hero_id = current_hero_id+1;
        }

        // console.log("Current:"+current_hero_id+",Next:"+next_hero_id+",Pre:"+pre_hero_id);
        showHero(current_hero_id);
    }
    function preHero() {
        next_hero_id = current_hero_id;
        if(current_hero_id<=0){
            current_hero_id = hero_count-1;
            pre_hero_id = current_hero_id-1;
        }
        else if(current_hero_id==(hero_count-1)){
            current_hero_id--;
            pre_hero_id = current_hero_id-1;
        }
        else{
            current_hero_id--;
            if(current_hero_id==0){
                pre_hero_id = hero_count-1;
            }
            else pre_hero_id = current_hero_id-1;
        }
        // console.log("Current:"+current_hero_id+",Next:"+next_hero_id+",Pre:"+pre_hero_id);
        showHeroP(current_hero_id);
    }
    function loopHero(interval_time) {
        main_loop = setInterval(nextHero,interval_time);
        //pause condition
        // $(".splash_info, .splash_info_dark").hover(function(){
        //     clearInterval(main_loop);
        // },function(){
        //     main_loop = setInterval(nextHero,interval_time);
        // });
        return 1;
    }
    showHero(0);
    loopHero(loop_time);
    var s_pre = $("#s_pre");
    var s_next = $("#s_next");
    $(".switcher_area,#paging").hover(function(){
        s_pre.css({transform:"translate(0,0)"});
        s_next.css({transform:"translate(0,0)"});
    },function () {
        s_pre.css({transform:"translate(-200%,0)"});
        s_next.css({transform:"translate(200%,0)"});
    });
    s_pre.click(function () {
        clearInterval(main_loop);
        preHero();
        loopHero(loop_time);
        // console.log("preHero executed.");
    });
    s_next.click(function () {
        clearInterval(main_loop);
        nextHero();
        loopHero(loop_time);
        // console.log("nextHero executed.");
    });
    // j=0;
    // for(j=0;j<hero_count;j++){
    //     $($(".page_dot")[j]).bind("click",function () {
    //         showHero(j);
    //     })
    // }
});//end jQuery