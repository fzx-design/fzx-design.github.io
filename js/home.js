$( document ).ready(function() {
    console.log( "Home ready!" );
    //Append nav & footer
    var nav_home = '<div class="logo_nav"></div>\
    <a href="about.html"><div class="button button_black">about me</div></a>';
    var footer = '<div id="footer_flex">\
      <div id="annotation_area">\
        <div class="annotation" style="font-family: \'SF Semi\' ">Content may be modified or hidden due to non-disclosure agreements.</div>\
        <div class="annotation">© 2018 Evan Feng | Designed and developed by Evan Feng</div>\
      </div>\
      <div id="button_area">\
        <a href="https://dribbble.com/evanfun" target="_blank"><div class="button button_pink">dribbble</div></a>\
        <a href="mailto:evanfun@me.com"><div class="button button_white">mail me</div></a>\
      </div>\
    </div>';

    $("#nav_bar_home").append(nav_home);
    $("#footer").append(footer);

    function circle(){
      $("#header_1").removeClass("header_hide"); //show header 1
      setTimeout(function(){ //hide header 1
        $("#header_1").addClass("header_hide");
      },2000);
      setTimeout(function(){ //show header 2
        $("#header_2").removeClass("header_hide");
      },3000);
      setTimeout(function(){ //hide header 2
        $("#header_2").addClass("header_hide");
      },5000);
      setTimeout(function(){ //show header 3
        $("#header_3").removeClass("header_hide");
      },6000);
      setTimeout(function(){ //hide header 3
        $("#header_3").addClass("header_hide");
      },8000);
    }
//------------------------


    setTimeout(function(){ // Delay the first animation
      circle(); //first round
      setInterval(function(){
        circle();
      }, 9000);
    }, 300);

    setTimeout(function(){
      $(".home_header_bg").addClass("home_header_white");
      $("#home_body").removeClass("home_body_hidden");
    }, 1000);

    // setTimeout(function(){
    //   $("#home_body").removeClass("home_body_hidden");
    // }, 1000);

});
