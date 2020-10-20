window.onload = function(){
    // Get the modal
    
            var ejer1 = false;
            var ejer2 = false;
            var ejer3 = false;
            var ejer4 = false;

            var descoLink = document.getElementById("desco__link");
            var abstLink = document.getElementById("abst__link");
            var geneLink = document.getElementById("gene__link");
            var depuLink = document.getElementById("depu__link");
            var descoBtn = document.getElementById("desco__btn");
            var abstBtn = document.getElementById("abst__btn");
            var geneBtn = document.getElementById("gene__btn");
            var depuBtn = document.getElementById("depu__btn");
            //link.setAttribute('href', "Ejercicios.html");

        function evaluar(){
            if (sessionStorage.getItem("Ejercicio1completo") != null && sessionStorage.getItem("Ejercicio1completo") == "true") {
                if (ejer1 == false) {
                    descoLink.setAttribute('href', "#");
                    descoBtn.style.background = "gray"
                    descoBtn.textContent = "Completado"
                    ejer1 = true;
                }
            }
            if (sessionStorage.getItem("Ejercicio2completo") != null && sessionStorage.getItem("Ejercicio2completo") == "true") {
                if (ejer2 == false) {
                    abstLink.setAttribute('href', "#");
                    abstBtn.style.background = "gray"
                    abstBtn.textContent = "Completado"
                    ejer2 = true;
                }
            }
            if (sessionStorage.getItem("Ejercicio3completo") != null && sessionStorage.getItem("Ejercicio3completo") == "true") {
                if (ejer3 == false) {
                    geneLink.setAttribute('href', "#");
                    geneBtn.style.background = "gray"
                    geneBtn.textContent = "Completado"
                    ejer3 = true;
                }
            }
            if (sessionStorage.getItem("Ejercicio4completo") != null && sessionStorage.getItem("Ejercicio1completo") == "true") {
                if (ejer4 == false) {
                    depuLink.setAttribute('href', "#");
                    depuBtn.style.background = "gray"
                    depuBtn.textContent = "Completado"
                    ejer4 = true;
                }
            }


        }

        setInterval(evaluar, 20);
    
  };