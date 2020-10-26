window.onload = function () {

  var database = new SaveFirebase("pruebas");
  var complete = false;

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var mas = document.getElementById("mas");
  var menos = document.getElementById("menos");
  var ExperienciaEjecicio1 = document.getElementById("ExperienciaEjecicio1");
  var ExperienciaEjecicio2 = document.getElementById("ExperienciaEjecicio2");
  var ExperienciaEjecicio3 = document.getElementById("ExperienciaEjecicio3");
  var ExperienciaEjecicio4 = document.getElementById("ExperienciaEjecicio4");

  //final.html
  // When the user clicks the button, open the modal 
  btn.onclick = function () {
  }

  function save() {
    if(complete == false){
    database.save();
    var link = document.getElementById("form__link");
    link.setAttribute('href', "final.html");
    complete = true;
    }
  }

  function isComplete() {

    if (ExperienciaEjecicio1.selectedIndex != 0 && ExperienciaEjecicio2.selectedIndex != 0 && ExperienciaEjecicio3.selectedIndex != 0 &&
      ExperienciaEjecicio4.selectedIndex != 0 && mas.value != "" && menos.value != "") {
      sessionStorage.setItem("ExperienciaEjecicio1", ExperienciaEjecicio1.options[ExperienciaEjecicio1.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio2", ExperienciaEjecicio2.options[ExperienciaEjecicio2.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio3", ExperienciaEjecicio3.options[ExperienciaEjecicio3.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio4", ExperienciaEjecicio4.options[ExperienciaEjecicio4.selectedIndex].value);
      sessionStorage.setItem("LoQueMasLeGusto", mas.value);
      sessionStorage.setItem("LoQueMenosLeGusto", menos.value);
      console.log("entro");
      btn.style.background = "#18C3C8"
      setTimeout(save(), 1000);
    } else {
      btn.style.background = "gray"
    }
  }

  setInterval(isComplete, 20);


};