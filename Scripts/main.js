window.onload = function () {
  // Get the modal
  var modal = document.getElementById("myModal");
  var complete = false;

  // Get the button that opens the modal
  var btn = document.getElementById("form__btn");
  var nombre = document.getElementById("nombre");
  var edad = document.getElementById("edad");
  var universidad = document.getElementById("universidad");
  var carrera = document.getElementById("carrera");
  var semestre = document.getElementById("semestre");
  var tiempoProgramacion = document.getElementById("tiempo-programacion");
  var diasProgramacion = document.getElementById("dias-programacion");
  var consideraProgramacion = document.getElementById("considera-programacion");


  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    if (complete == true) {
      modal.style.display = "block";
    }
    
    //Ejercicios.html
    sessionStorage.setItem("nombre", nombre.value);
    sessionStorage.setItem("edad", edad.value);
    sessionStorage.setItem("universidad", universidad.value);
    sessionStorage.setItem("carrera", carrera.value);
    sessionStorage.setItem("semestre", semestre.value);
    sessionStorage.setItem("tiempoProgramando", tiempoProgramacion.options[tiempoProgramacion.selectedIndex].value);
    sessionStorage.setItem("diasProgramando", diasProgramacion.value);
    sessionStorage.setItem("consideraProgramando", consideraProgramacion.options[consideraProgramacion.selectedIndex].value);
  }
  
    function isComplete() {
      
      if (nombre.value != "" && edad.value != "" && diasProgramacion.value != "" && universidad.value != "" && 
      tiempoProgramacion.selectedIndex != 0 && consideraProgramacion.selectedIndex != 0 && semestre.value != "" && carrera.value != "") {
        console.log("entro");
        complete = true;
        btn.style.background = "#18C3C8"
      } else {
        btn.style.background = "gray"
      }
    }
  
    setInterval(isComplete,20);

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

