// The distance in pixels from the top of the page the user must scroll to show change the menu colour
var PX_FROM_TOP = 600;
var NAVBAR_ID = "navBar"

// When the user scrolls down PX_FROM_TOP px from the top, change the colour of the navigation menu
window.onscroll = function() {scroll()};

function scroll(){
  var navBar = document.getElementById("navBar");
  if(document.body.scrollTop > PX_FROM_TOP || document.documentElement.scrollTop > PX_FROM_TOP){
    navBar.className = "topnav fade_navbar";
    console.log(document.getElementById(NAVBAR_ID).className);
  }else{
    if(navBar.className === "topnav fade_navbar"){
      navBar.className = "topnav at_top";
      console.log(document.getElementById(NAVBAR_ID).className);
    }
  }
}
