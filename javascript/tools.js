// DROPDOWN HAMBURGER

var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "0px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }
});

function navToggle() {
  //to close
  if (nav.style.height <= "275px") {
  nav.style.height = "50px";
  main.style.marginTop = "0px";

      var i = 0;
      for (i = 0; i < menu.length; i++){
  menu[i].style.opacity="0.0";
  menu[i].style.marginTop="100px";
  };
      document.body.style.backgroundColor = "rgba(0,0,0,0.0)";

  }
  //to open
  else if (nav.style.height <= "50px") {
  nav.style.height = "275px";
  main.style.marginTop = "225px";
      var i = 0;
      for (i = 0; i < menu.length; i++){
  menu[i].style.opacity="1.0";
  menu[i].style.marginTop="0px";
  };
      // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }

};

// NAVBAR SCROLL FUNCTION

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgba(255,255,255,0.9)');
          $('.nav').css('box-shadow', '0 2px 4px 0 rgba(0,0,0,0.10)');
       } else {
          $('.nav').css('background-color', 'transparent');
          $('.nav').css('box-shadow', '0 2px 4px 0 rgba(0,0,0,0)')
       }
   });
});
