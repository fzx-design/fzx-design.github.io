$(document).ready(function(){
  var nav = '<a href="index.html"><div id="logo_area">\
    <div id="button_back"></div>\
    <div id="logo_nav_story"></div>\
  </div></a>\
  <a href="about.html"><div class="button button_black">about me</div></a>';
  var footer = '<div id="footer_flex">\
    <div id="annotation_area">\
      <div class="annotation" style="font-family: \'SF Semi\' ">Some content may be modified or hidden due to non-disclosure agreements.</div>\
      <div class="annotation">© 2018 Evan Feng</div>\
    </div>\
    <div id="button_area">\
      <a href="https://dribbble.com/evanfun" target="_blank"><div class="button button_pink">dribbble</div></a>\
      <a href="mailto:evanfun@me.com"><div class="button button_white">mail me</div></a>\
    </div>\
  </div>';
  $(".nav_bar").append(nav);
  $("#footer").append(footer);
});
