$( document ).ready(function() {
    console.log( "ready!" );
    function circle(){
      $("#header_1").removeClass("header_hide"); //show header 1
      setTimeout(function(){ //hide header 1
        $("#header_1").addClass("header_hide");
      },3000);
      setTimeout(function(){ //show header 2
        $("#header_2").removeClass("header_hide");
      },4000);
      setTimeout(function(){ //hide header 2
        $("#header_2").addClass("header_hide");
      },7000);
      setTimeout(function(){ //show header 3
        $("#header_3").removeClass("header_hide");
      },8000);
      setTimeout(function(){ //hide header 3
        $("#header_3").addClass("header_hide");
      },11000);
    }
//------------------------
    setTimeout(function(){ // Delay the first animation
      circle(); //first round
      setInterval(function(){
        circle();
      }, 12000);
    }, 500);
});
