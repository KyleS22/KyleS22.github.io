/* Sets the navbar to display the menu in responsive mode when the icon is clicked */
function toggleResponsiveMenu(){
  var navBar = document.getElementById("navBar");
  console.log(navBar.classList);
  if(navBar.classList.contains("responsive")){
    navBar.classList.remove("responsive");
  }else{
    navBar.classList.add("responsive");
  }
  // if(x.className === "topnav"){
  //   x.className += " responsive";
  // }else{
  //   x.className = "topnav";
  // }
}
