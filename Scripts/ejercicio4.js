window.onload = function(){
  // Get the modal
  var timeBtn = document.getElementById("time__btn");
  var seg = 0;
  var min = 0;
  var contando = true;
  var tiempoM = 5;
  var tiempoS = 0;
  var modal = document.getElementById("myModal");
  var btnTime = document.getElementById("time__btn");
  
  btnTime.onclick = function () {
    sessionStorage.setItem("tiempoEvaluacion", min + ":" + seg);
    sessionStorage.setItem("Ejercicio4completo", "true");
    if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
      link = document.getElementById("btnLink");
      link.setAttribute('href', "Experiencia.html");
  }
  }
  
  modal.style.display = "block";

   var btn = document.getElementById("myBtn");

   btn.onclick = function() {
      modal.style.display = "none";
    }

    function timer() {
     
      if (contando == true) {
        if ( timeBtn.textContent == "Continuar") {
          contando = false;  
        }
        seg++;
        tiempoS--;
        if (tiempoS < 0) {
          tiempoS = 59;
          tiempoM--;
        }
        if (seg > 60) {
          min++;
          seg = 0;
        }
        timeBtn.textContent = tiempoM + ":" + tiempoS;
        if (tiempoM <= 0) {
          timeBtn.textContent = "Continuar";
          var link = document.getElementById("btnLink");
          contando = false;
          link.setAttribute('href', "Ejercicios.html");
        }        
      }
    }
  
  
    setInterval(timer, 1000);
};