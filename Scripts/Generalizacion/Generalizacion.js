new p5(function (app) {

    var piezas = [];
    var imagenes = [];
    var select = false;
    var indexSelec = null;
    var is = null;
    var indexFinal = null;
    var ifinal = null;
    var isComplete = false;
    var tInicio = null;
    var tFinal = null;


    app.setup = function () {

        this.cnv = app.createCanvas(app.windowWidth * 0.22, app.windowHeight * 0.55);
        this.cnv.parent('Generalizacion');

        for (let i = 0; i < 16; i++) {
            piezas.push(new Pieza(app, imagenes[i], i + 1));
        }

        piezas.sort(() => Math.random() - 0.5);
        //console.log(this.arreglo);
    }

    app.preload = function () {
        for (let i = 0; i < 16; i++) {
            imagenes.push(app.loadImage("../Imagenes/Piezas/" + (i + 1) + ".png"));
        }

    }

    app.draw = function () {
        app.background(255);
        let c = 0;
        let r = 0;
        for (let i = 0; i < piezas.length; i++) {
            piezas[i].show((app.width / 4) * r, (app.height / 4) * c);
            r++;
            if (r > 3) {
                c++;
                r = 0;
            }
        }
        if (select == true) {
            let h = app.height / 4;
            let w = app.width / 4;
            app.imageMode(app.CENTER);
            app.image(imagenes[is.getNumero() - 1], app.mouseX, app.mouseY, w, h);

        }
        if (isComplete == true) {
            var timeBtn = document.getElementById("time__btn");
            var link;
            timeBtn.textContent = "Continuar";
            if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Experiencia.html");
            } else {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Ejercicios.html");
            }
        }
        if (isComplete == false) {
            let texto = "";
            for (let i = 0; i < piezas.length; i++) {
                texto += "" + piezas[i].getNumero();

            }

            if (texto == "12345678910111213141516") {
                isComplete = true;
                if (tInicio != null) {
                    let d = new Date();
                    tFinal = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                    console.log(tInicio);
                    console.log(tFinal);
                }
            }
        }

    }

    app.mousePressed = function () {
        if (isComplete == false) {
            if (tInicio == null) {
                let d = new Date();
                tInicio = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            }
            for (let i = 0; i < piezas.length; i++) {
                if (piezas[i].press(app.mouseX, app.mouseY) == true) {
                    is = piezas[i];
                    is.setSelect(true);
                    indexSelec = i;
                    select = true;
                }
            }
        }
    }
    app.mouseReleased = function () {
        if (isComplete == false) {
            for (let i = 0; i < piezas.length; i++) {
                if (piezas[i].press(app.mouseX, app.mouseY) == true) {
                    ifinal = piezas[i];
                    indexFinal = i;
                }
            }
            if (ifinal != null && is != null) {
                if (select == true) {
                    piezas[indexSelec] = ifinal;
                    piezas[indexFinal] = is;
                }
            }
            is.setSelect(false);
            select = false;
            indexSelec = null;
            is = null;
            ifinal = null;
            select = null;
        }
    }

    app.keyPressed = function () {

    }

});