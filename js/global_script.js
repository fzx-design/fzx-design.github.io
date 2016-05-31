/**
 * Created by Evan on 16/3/8.
 * Initialize common components
 */
var menu_show = false;
var dark_now = false;
var is_mobile = false;
$(function(){
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i) ? true: false;
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i) ? true: false;
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) ? true: false;
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    if (isMobile.any()){
        is_mobile = true;
    }
    //Menu items constructor
    function WorkCell(w_index) {
        this.work_cell_id = "wc" + w_index;
        this.glance_img_src = "";
        this.w_link_to = "";
        this.work_name = "Work";
        this.work_year = "2000";
        this.html_con = [];
    }
    WorkCell.prototype.wcHtml = function () {
        this.html_con.push("<a href='",this.w_link_to,"'>");
        this.html_con.push("<div id='",this.work_cell_id,"' class='work_cell_container'>");
        this.html_con.push("<div class='work_glance' style='background-image: url(",this.glance_img_src,")'></div>");
        this.html_con.push("<div class='work_intro'><div class='work_name'>",this.work_name,"</div>");
        this.html_con.push("<div class='work_year'>",this.work_year,"</div></div>");
        this.html_con.push("</div></a>");
        return this.html_con.join("");
    };

    function JournalCell(j_index) {
        this.journal_cell_id = "jc" + j_index;
        this.brf_img_src = "";
        this.j_link_to = "";
        this.journal_title = "";
        this.journal_date = "";
        this.journal_brf = "";
        this.html_con = [];
    }
    JournalCell.prototype.jcHtml = function () {
        this.html_con.push("<a href='",this.j_link_to,"'>");
        this.html_con.push("<div id='",this.journal_cell_id,"' class='journal_cell_container'>");
        this.html_con.push("<div class='journal_glance' style='background-image: url(",this.brf_img_src,")'></div>");
        this.html_con.push("<div class='journal_title'>",this.journal_title,"</div>");
        this.html_con.push("<div class='journal_date'>",this.journal_date,"</div>");
        this.html_con.push("<p class='journal_brf'>",this.journal_brf,"</p>");
        this.html_con.push("</div></a>");
        return this.html_con.join("");
    };

    var work_seg_html = "<div id='work_seg' class='m_seg'><div id='work_inner'></div></div>";
    var about_seg_html = '<div id="about_seg"><div id="about_inner"></div></div>';
    var journal_seg_html = "<div id='journal_seg' class='m_seg'><div id='journal_inner'></div></div>";


    //Retrieve cell data
    var work_cells_data = [
        {
            "img_src":"img/m_w_dbrush.jpg",
            "link_to":"w_dbrush.html",
            "project_name":"Digital Chinese Brush Bundle",
            "project_year":"2016"
        },
        {
            "img_src":"img/m_w_switcho.jpg",
            "link_to":"w_switcho.html",
            "project_name":"Switch O",
            "project_year":"2015"
        },
        {
            "img_src":"img/m_w_trims.jpg",
            "link_to":"w_trims.html",
            "project_name":"Trims",
            "project_year":"2014"
        },
        {
            "img_src":"img/m_w_kp.jpg",
            "link_to":"w_keyplus.html",
            "project_name":"Key Plus",
            "project_year":"2014"
        },
        {
            "img_src":"img/m_w_psa.jpg",
            "link_to":"w_psa.html",
            "project_name":"PSA-Tongji HMI Design Research",
            "project_year":"2013"
        },
        {
            "img_src":"img/m_w_cdisoul.jpg",
            "link_to":"w_cdisoul.html",
            "project_name":"CDI Soul System",
            "project_year":"2012"
        },
        {
            "img_src":"img/m_w_vcard.jpg",
            "link_to":"w_vcard.html",
            "project_name":"VCard Weibo Client",
            "project_year":"2012"
        },
        {
            "img_src":"img/m_w_otr.jpg",
            "link_to":"w_otr.html",
            "project_name":"More Works",
            "project_year":"From 2011, 6 works"
        }
    ];
    var journal_cells_data = [
        // {
        //     "img_src":"img/j_3.png",
        //     "link_to":"#",
        //     "journal_title":"Do We Really Need a Big Screen Behind the Steering Wheel?",
        //     "journal_date":"2016-3-21",
        //     "journal_brief":"Two general approaches that together covers the majority of the space of smart car service innovation."
        // },
        {
            "img_src":"img/j_1.png",
            "link_to":"j_connect_car.html",
            "journal_title":"Connected and Open Platform-based Approaches for Smart Car Service Design",
            "journal_date":"2016-2-25",
            "journal_brief":"Introducing two general approaches that together covers the majority of the space of smart car service innovation."
        },
        {
            "img_src":"img/j_2.jpg",
            "link_to":"#",
            "journal_title":"Affinity Designer Hands-on: Making a Fancy Instrument Cluster",
            "journal_date":"2015-11-4",
            "journal_brief":"What would be better for a tool test than a sci-fi style speciosity?"
        },
        {
            "img_src":"img/j_4.png",
            "link_to":"j_wearable.html",
            "journal_title":"Interface Design for Wearable Devices (Chinese Version)",
            "journal_date":"2014-3-11",
            "journal_brief":"Discussing designing interaction for wearable devices from the aspect of HCI, interface design, and service design."
        }
    ];

    //Generate nav bar
    var nav_html = [];
    var menu_html = [];
    var nav_area = $("#nav_bar");
    function generateNavHtml() {
        nav_html.push("<div id='fzx' class='nav_items'><a href='index.html'><div id='title'></div><div id='home'>home</div></a></div>");
        nav_html.push("<div id='menu' class='nav_items'>");
        nav_html.push("<div class='menu_items'>all works</div>");
        nav_html.push("<div class='menu_items'>journal</div>");
        nav_html.push("<div class='menu_items'>about</div>");
        // nav_html.push("<div class='menu_items'>contact</div>");
        nav_html.push("</div>");
        nav_html.push("<div id='close_panel'></div>");
        return nav_html.join("");
    }
    nav_area.append(generateNavHtml());//append nav bar
    var m_items = $(".menu_items");
    var close_panel = $("#close_panel");
    var inner_con = $("#content");
    var menu_links = $("#menu");
    m_items.click(showMenu);
    close_panel.click(hideMenu);

    //Generate menu panel
    menu_html.push("<div id='menu_panel' class='hidden'>");
    menu_html.push("<div id='panel_bg'></div>");
    menu_html.push("</div>");
    nav_area.after(menu_html.join(""));//append menu container
    var m_panel = $("#menu_panel");
    m_panel.append(work_seg_html);//append work segment panel
    m_panel.append(journal_seg_html);//append journal segment panel
    m_panel.append(about_seg_html);//append about segment panel
    var w_seg = $("#work_seg");
    var j_seg = $("#journal_seg");
    var a_seg = $('#about_seg');
    a_seg.load('about.html');

    //Generate work segment cells
    var work_cell_count = work_cells_data.length;
    var work_cell_objects = [];
    var work_inner_container = $("#work_inner");
    for(i=0;i<work_cell_count;i++){
        work_cell_objects[i] = new WorkCell(i);
        work_cell_objects[i].glance_img_src = work_cells_data[i].img_src;
        work_cell_objects[i].w_link_to = work_cells_data[i].link_to;
        work_cell_objects[i].work_name = work_cells_data[i].project_name;
        work_cell_objects[i].work_year = work_cells_data[i].project_year;
        work_inner_container.append(work_cell_objects[i].wcHtml());
    }
    //Generate journal segment cells
    var journal_cell_count = journal_cells_data.length;
    var journal_cell_objects = [];
    var journal_inner_container = $("#journal_inner");
    for(k=0;k<journal_cell_count;k++){
        journal_cell_objects[k] = new JournalCell(k);
        journal_cell_objects[k].brf_img_src = journal_cells_data[k].img_src;
        journal_cell_objects[k].j_link_to = journal_cells_data[k].link_to;
        journal_cell_objects[k].journal_title = journal_cells_data[k].journal_title;
        journal_cell_objects[k].journal_date = journal_cells_data[k].journal_date;
        journal_cell_objects[k].journal_brf = journal_cells_data[k].journal_brief;
        journal_inner_container.append(journal_cell_objects[k].jcHtml());
    }
    // Control
    var body_con = $('body');
    function showMenu() {
        //clear menu style
        menu_show = true;
        if('undefined'==typeof(fzx_swiper)){
            console.log('Not at index page.');
        }
        else fzx_swiper.stopAutoplay();
        // if(nav_area.hasClass("dark_content")) should_dark = true;
        // else should_dark = false;
        nav_area.removeClass();
        m_items.removeClass("m_selected");
        //show menu panel
        m_panel.removeClass("hidden");
        //show blurred bg
        inner_con.css({filter:"blur(10px)","-webkit-filter":"blur(10px)"});
        body_con.addClass("disabled");
        //move menu bar
        menu_links.addClass("menu_move");
        //show close button
        close_panel.css({transform:"translate(0,0)"});
        //show demanded seg
        $(this).addClass("m_selected");
        if($(this).text()=="all works"){
            w_seg.removeClass('seg_hidden');
            j_seg.addClass('seg_hidden');
            a_seg.addClass('seg_hidden');
        }
        else if($(this).text()=="journal"){
            w_seg.addClass('seg_hidden');
            j_seg.removeClass('seg_hidden');
            a_seg.addClass('seg_hidden');
        }
        else if($(this).text()=="about"){
            w_seg.addClass('seg_hidden');
            j_seg.addClass('seg_hidden');
            a_seg.removeClass('seg_hidden');
        }
        else if($(this).text()=="contact"){
            w_seg.addClass('seg_hidden');
            j_seg.addClass('seg_hidden');
            a_seg.addClass('seg_hidden');
        }
        //log
        console.log("showMenu executed.");
        console.log($(this).text());
    }
    function hideMenu() {
        menu_show = false;
        if('undefined'==typeof(fzx_swiper)){
            console.log('Not at index page.');
        }
        else fzx_swiper.startAutoplay();
        m_items.removeClass("m_selected");
        if(dark_now) nav_area.addClass("dark_content");
        inner_con.css({filter:"none","-webkit-filter":"none"});
        body_con.removeClass();
        m_panel.addClass("hidden");
        w_seg.addClass('seg_hidden');
        j_seg.addClass('seg_hidden');
        a_seg.addClass('seg_hidden');
        menu_links.removeClass("menu_move");
        close_panel.css({transform:"translate(80px,0)"});
        console.log("hideMenu executed.");
    }
    hideMenu();
    w_seg.bind("scroll",function () {
        if((work_inner_container.position().top)<=-2){
            w_seg.css({borderTopColor:"rgba(0,0,0,0.1)"});
        }
        else{
            w_seg.css({borderTopColor:"rgba(0,0,0,0)"});
        }
    });
    j_seg.bind("scroll",function () {
        if((journal_inner_container.position().top)<=-2){
            j_seg.css({borderTopColor:"rgba(0,0,0,0.1)"});
        }
        else{
            j_seg.css({borderTopColor:"rgba(0,0,0,0)"});
        }
    });
    nav_area.hover(function () {
        if(!menu_show){
            if(nav_area.hasClass('dark_content')) $('#content_nav_bg').css({opacity:'0.9',backgroundColor:'black'});
            else $('#content_nav_bg').css({opacity:'0.9',backgroundColor:'white'});
        }
    },function () {
        $('#content_nav_bg').css({opacity:'0'});
    });
});//end jquery ready