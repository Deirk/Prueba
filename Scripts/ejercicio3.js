window.onload = function () {
  // Get the modal
  var timeBtn = document.getElementById("time__btn");
  var seg = 0;
  var min = 0;
  var contando = true;
  var tiempoM = 3;
  var tiempoS = 0;
  var modal = document.getElementById("myModal");
  var btnTime = document.getElementById("time__btn");
  var textoRespuesta = document.getElementById("solu__imput");

  btnTime.onclick = function () {
    if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
      link = document.getElementById("btnLink");
      link.setAttribute('href', "Experiencia.html");
      sessionStorage.setItem("tiempoGeneralizacion", min + ":" + seg);
      sessionStorage.setItem("respuestaGeneralizacion", textoRespuesta.value);
    }
    sessionStorage.setItem("tiempoGeneralizacion", min + ":" + seg);
    sessionStorage.setItem("respuestaGeneralizacion", textoRespuesta.value);
  }

  modal.style.display = "block";

  var btn = document.getElementById("myBtn");

  btn.onclick = function () {
    modal.style.display = "none";
    setInterval(timer, 1000);
  }

  function timer() {


      if (timeBtn.textContent == "Continuar") {
        sessionStorage.setItem("tiempoGeneralizacion", min + ":" + seg);
        sessionStorage.setItem("Ejercicio3completo", "true");
        sessionStorage.setItem("respuestaGeneralizacion", textoRespuesta.value);
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
      if (contando == true) {
     /* if (tiempoS < 10) {
        timeBtn.textContent = tiempoM + ":0" + tiempoS;
      } else {
        timeBtn.textContent = tiempoM + ":" + tiempoS;
      }*/
      if (tiempoM < 0) {
        sessionStorage.setItem("tiempoGeneralizacion", min + ":" + seg);
        sessionStorage.setItem("respuestaGeneralizacion", textoRespuesta.value);
        sessionStorage.setItem("Ejercicio3completo", "true");
        timeBtn.textContent = "Continuar";
        var link = document.getElementById("btnLink");
        contando = false;
        link.setAttribute('href', "Ejercicios.html");
      }
    }
  }

};