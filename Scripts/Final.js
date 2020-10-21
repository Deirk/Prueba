window.onload = function(){

    var database = new SaveFirebase();

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var mas = document.getElementById("mas");
    var menos = document.getElementById("menos");
    var ExperienciaEjecicio1 = document.getElementById("ExperienciaEjecicio1");
    var ExperienciaEjecicio2 = document.getElementById("ExperienciaEjecicio2");
    var ExperienciaEjecicio3 = document.getElementById("ExperienciaEjecicio3");
    var ExperienciaEjecicio4 = document.getElementById("ExperienciaEjecicio4");
       
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      sessionStorage.setItem("ExperienciaEjecicio1", ExperienciaEjecicio1.options[ExperienciaEjecicio1.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio2", ExperienciaEjecicio2.options[ExperienciaEjecicio2.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio3", ExperienciaEjecicio3.options[ExperienciaEjecicio3.selectedIndex].value);
      sessionStorage.setItem("ExperienciaEjecicio4", ExperienciaEjecicio4.options[ExperienciaEjecicio4.selectedIndex].value);
      sessionStorage.setItem("LoQueMasLeGusto",mas.value);
      sessionStorage.setItem("LoQueMenosLeGusto",menos.value);
      database.save();
    }
    
    };