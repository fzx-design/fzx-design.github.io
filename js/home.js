$( document ).ready(function() {
    console.log( "ready!" );
    setTimeout(function(){
      $(".home_header_content").removeClass("initial");
    }, 500);

    // setTimeout(function(){
    //   $(".home_header_content-1").addClass("initial");
    // }, 2000);
    //
    // setTimeout(function(){
    //   $(".home_header_content-2").addClass("initial");
    // }, 4000);
    //
    // setTimeout(function(){
    //   $(".home_header_content-3").addClass("initial");
    // }, 6000);
});
