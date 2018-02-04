// Get the modal
var modal = document.getElementById('modal');

var btn = document.getElementById("emailButton");

var span = document.getElementsByClassName("modal_close")[0];

// When clicked, open the modal
btn.onclick = function(){
  modal.style.display = "block";
}

// When the user clicks on the span, close it
span.onclick = function(){
  modal.style.display = "none";
}

// When the user clicks outside the modal, close it
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
