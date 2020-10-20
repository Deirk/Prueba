new p5(function (app) {

    var casillas = [];
    var instruccionesHorizontal;
    var instruccionesVertical;
    var totalVerticales;
    var w, h;
    var npiezas;
    var u;
    var pantalla = 0;
    var finalImage = [];
    var erroresEjercio1 = 0;
    var tiempoEjercicio1;
    var erroresEjercio2 = 0;
    var tiempoEjercicio2;
    var tInicio1 = null;
    var tFinal1 = null;
    var tInicio2 = null;
    var tFinal2 = null;


    app.setup = function () {

        this.cnv = app.createCanvas(app.windowWidth * 0.25, app.windowWidth * 0.25);
        this.cnv.parent('Evaluacion');
        this.ejercicio1Lineas = [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0]];
        instruccionesHorizontal = [1, 2, 5, "2" + "\n" + "1", 1];
        totalVerticales = 12;
        instruccionesVertical = [1, 3, 5, 1, 2];
        npiezas = this.ejercicio1Lineas.length;
        w = (app.width - (app.width * 0.2)) / npiezas;
        h = (app.height - (app.height * 0.2)) / npiezas;
        app.textAlign(app.CENTER, app.CENTER);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {

                casillas.push(new Casilla(app, (w * j) + (app.width * 0.2), (h * i) + (app.height * 0.2), this.ejercicio1Lineas[i][j], npiezas));

            }
        }
        this.update = update.bind(this);
        u = setInterval(this.update, 20);
        app.imageMode(app.CENTER);
    }

    app.preload = function () {
        finalImage.push(app.loadImage("../Imagenes/NonogramaFinal/Final1.png"));
        finalImage.push(app.loadImage("../Imagenes/NonogramaFinal/Final2.png"));
    }

    app.draw = function () {
        app.background(255);
        switch (pantalla) {
            case 0:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].show();

                }
                for (let i = 0; i < instruccionesHorizontal.length; i++) {
                    app.fill(24, 195, 200);
                    app.rect((w * i) + (app.width * 0.2), 0, w, h + (h * 0.2));
                    app.fill(255);
                    app.text(instruccionesHorizontal[i], ((w * i) + ((app.width * 0.2) + ((app.width * 0.08)))), (app.height * 0.2) / 2);
                    app.fill(24, 195, 200);
                    app.rect(0, (h * i) + (app.height * 0.2), w + (w * 0.2), h);
                    app.fill(255);
                    app.text(instruccionesVertical[i], ((app.width * 0.2) / 2), (h * i) + ((app.height * 0.2) + ((app.height * 0.08))));

                }

                break;
            case 1:
                app.image(finalImage[0], app.width / 2, app.height * 0.35, app.width * 0.5, app.height * 0.5)
                app.fill(0);
                app.fill(24, 195, 200);
                app.textSize(app.width * 0.04);
                app.text("Ya completaste el primer nonograma con éxito,", app.width / 2, app.height * 0.68);
                app.text("ahora ahora retate a hacer uno con más fichas.", app.width / 2, app.height * 0.73);

                app.fill(14, 231, 136);
                app.textSize(app.width * 0.06);
                app.text("Has click para continuar.", app.width / 2, app.height * 0.8);




                break;
            case 2:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].show();

                }
                for (let i = 0; i < instruccionesHorizontal.length; i++) {
                    app.textSize(app.width * 0.03);
                    app.fill(24, 195, 200);
                    app.rect((w * i) + (app.width * 0.2), 0, w, h + (h));
                    app.fill(255);
                    app.text(instruccionesHorizontal[i], ((w * i) + ((app.width * 0.24))), (app.height * 0.18) / 2);
                    app.fill(24, 195, 200);
                    app.rect(0, (h * i) + (app.height * 0.2), w + w, h);
                    app.fill(255);
                    app.text(instruccionesVertical[i], ((app.width * 0.165) / 2), (h * i) + ((app.height * 0.17) + ((app.height * 0.08))));

                }
                break;
            case 3:
                app.image(finalImage[1], app.width / 2, app.height * 0.35, app.width * 0.5, app.height * 0.5)
                app.fill(0);
                app.fill(24, 195, 200);
                app.textSize(app.width * 0.04);
                app.text("Has completado el ejercicio", app.width / 2, app.height * 0.68);
                app.text("!Muchas gracias", app.width / 2, app.height * 0.73);

               
                if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
                    var timeBtn = document.getElementById("time__btn");
                    var link;
                    timeBtn.textContent = "Continuar" ;
                    link = document.getElementById("btnLink");
                    link.setAttribute('href', "Experiencia.html");
                } else {   
                    var timeBtn = document.getElementById("time__btn");
                    var link;
                    timeBtn.textContent = "Continuar" ;                 
                    link = document.getElementById("btnLink");
                    link.setAttribute('href', "Ejercicios.html");
                }
                

                break;

        }

    }

    app.mousePressed = function () {
        switch (pantalla) {
            case 0:
                if (tInicio1 == null) {
                    let d = new Date();
                    tInicio1 = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
                }
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].press(app.mouseX, app.mouseY);
                }

                break;
            case 1:
                casillas = []
                pantalla++;
                this.ejercicio2Lineas = [[0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 1, 1, 0], [1, 1, 0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0]];
                instruccionesHorizontal = [4, "1" + "\n" + "6", "2" + "\n" + "2" + "\n" + "4", "4" + "\n" + "4", "2" + "\n" + "2" + "\n" + "2", "2" + "\n" + "3", "2" + "\n" + "3", "2" + "\n" + "3", 5, 3];
                totalVerticales = 56;
                instruccionesVertical = [2, 4, 2, 2, "2    4", "2    6", "5    2", "4    5", 9, 7];
                npiezas = this.ejercicio2Lineas.length;
                w = (app.width - (app.width * 0.2)) / npiezas;
                h = (app.height - (app.height * 0.2)) / npiezas;
                app.textAlign(app.CENTER, app.CENTER);
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {

                        casillas.push(new Casilla(app, (w * j) + (app.width * 0.2), (h * i) + (app.height * 0.2), this.ejercicio2Lineas[i][j], npiezas));

                    }
                }
                if (tInicio2 == null) {
                    let d = new Date();
                    tInicio2 = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
                }
                this.update = update.bind(this);
                u = setInterval(this.update, 20);
                break;
            case 2:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].press(app.mouseX, app.mouseY);
                }
                break;


        }
    }
    app.mouseReleased = function () {

    }

    app.keyPressed = function () {

    }

    function update() {
        let validadorC = 0;
        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].getCorrecto() == true && casillas[i].getActive() == true) {
                validadorC++;
            }

        }
        if (validadorC == totalVerticales) {
            switch (pantalla) {
                case 0:
                    erroresEjercio1 = Casilla.errores;
                    Casilla.errores = 0;
                    if (tInicio1 != null) {
                        let d = new Date();
                        tFinal1 = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
                        console.log(tInicio1);
                        console.log(tFinal1);
                    }
                
                    break;
                case 2:
                    erroresEjercio2 = Casilla.errores;
                    Casilla.errores = 0;
                    sessionStorage.setItem("erroresEvaluacion1", erroresEjercio1);
                    sessionStorage.setItem("erroresEvaluacion2", erroresEjercio2);
                    if (tInicio2 != null) {
                        let d = new Date();
                        tFinal2 = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
                        console.log(tInicio2);
                        console.log(tFinal2);
                    }
                    break;

            }
            pantalla++;
            clearInterval(u);

        }
    }


});