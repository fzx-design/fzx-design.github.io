$(document).ready(function(){
  var nav = '<a href="index.html"><div id="logo_area" class="hide">\
    <div id="button_back" class="hide"></div>\
    <div id="logo_nav_story"></div>\
  </div></a>\
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
  $(".nav_bar").append(nav);
  $("#footer").append(footer);

  //Back button slide in
  $(".story_header_img").removeClass("story_header_hidden");
  $("#story_first").removeClass("story_first_hidden");
  setTimeout(function(){
    $("#logo_area").removeClass("hide");
    $("#button_back").removeClass("hide");
  }, 1000);
});
