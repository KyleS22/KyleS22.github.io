// The distance in pixels from the top of the page the user must scroll to show button
var PX_FROM_TOP = 20;
// The ID of the button
var BTN_ID = "returnToTopBtn";

// When the user scrolls down PX_FROM_TOP px from the top, show button
window.onscroll = function() {scroll()};

function scroll(){
  if(document.body.scrollTop > PX_FROM_TOP || document.documentElement.scrollTop > PX_FROM_TOP){
    document.getElementById(BTN_ID).style.display = "block";
  }else{
    document.getElementById(BTN_ID).style.display = "none";
  }
}

// When the user click the button, scroll to the top of the document
function returnToTop(){
  document.body.scrollTop = 0;  // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}
