window.onload = function(){
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var nombre = document.getElementById("nombre");
var universidad = document.getElementById("universidad");
var semestre = document.getElementById("semestre");
var tiempoProgramacion = document.getElementById("tiempo-programacion");


// When the user clicks the button, open the modal 
btn.onclick = function() {
  sessionStorage.setItem("nombre",nombre.value);
  sessionStorage.setItem("universidad",universidad.value);
  sessionStorage.setItem("semestre",semestre.value);
  sessionStorage.setItem("tiempoProgramando", tiempoProgramacion.options[tiempoProgramacion.selectedIndex].value);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
};

