// Get the modal
var modal = document.getElementById("myModal");
var modal_form = document.getElementById("myModal_form");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn_form = document.getElementById("myBtn_form");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_form = document.getElementsByClassName("close_form")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn_form.onclick = function() {
  modal_form.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}
span_form.onclick = function() {
  modal_form.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_form){
    modal_form.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
}



