new p5(function (app) {

    var figuras = [];
    var btn = [];
    var secuencia = "";
    var errores = 0;
    var completo = false;
    var timeBtn = document.getElementById("time__btn");
    var link;
    var tInicio1 = null;
    var tFinal1 = null;
    


    app.setup = function () {

        this.cnv = app.createCanvas(app.windowWidth *0.335, app.windowHeight * 0.20);
        this.cnv.parent('Descomposicion');
        app.imageMode(app.CENTER);
        app.rectMode(app.CENTER);
        app.textAlign(app.CENTER, app.CENTER);
        figuras.push(new FiguraDescomponer(app, 2));
        figuras.push(new FiguraDescomponer(app, 2));
        figuras.push(new FiguraDescomponer(app, 1));
        figuras.push(new FiguraDescomponer(app, 3));
        figuras.push(new FiguraDescomponer(app, 2));
        for (let i = 0; i < 6; i++) {
            if (i < 5) {
                btn.push(new BotonesDescomponer(app, (app.width / 9) * (2 + i), app.height / 8, i + 1));
            } else {

                btn.push(new BotonesDescomponer(app, (app.width / 9) * (2 + i), app.height / 8, "⟲"));
            }
        }



    }

    app.preload = function () {

    }

    app.draw = function () {
        app.background(255);
        app.fill(200, 20);
        app.rect(app.width / 2 + (app.width * 0.005), app.height / 2 + (app.width * 0.005), app.width * 0.82, app.height * 0.66);
        app.fill(255);
        app.rect(app.width / 2, app.height / 2, app.width * 0.85, app.height * 0.85);
        for (let i = 0; i < figuras.length; i++) {
            if (i <6) {
                figuras[i].show((app.width / 9) * (i + 2),(app.height / 5) * 2.7);
            } else {
                figuras[i].show((app.width / 9) * (i - 4),(app.height / 5) * 4.2);
            }
        }
        for (let i = 0; i < btn.length; i++) {
            btn[i].show();
        }
        if (figuras.length == 1 && completo == false) {
            let n = 0;
            for (let i = 0; i < figuras.length; i++) {
                if (figuras[i].getTFigura()==1) {
                    n++;
                }               
            }
            if (n == 1) {
                completo = true;
                sessionStorage.setItem("RespuestaDescomposicion", secuencia);
                sessionStorage.setItem("ErroresDescomposicion", errores);
            }
        }
        if (completo == true) {
            timeBtn.textContent = "Continuar" ;
            if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Experiencia.html");
            } else {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Ejercicios.html");
            }

        }
    }

    app.mousePressed = function () {

    }

    app.mouseReleased = function () {
        
        if(completo == false){
        for (let i = 0; i < btn.length; i++) {
            if (btn[i].press(app.mouseX, app.mouseY) == true) {
                if (btn[i].getNumero() != "⟲") {
                    let n = btn[i].getNumero();
                    switch (n) {
                        case 1:

                            for (let j = 0; j < figuras.length; j++) {
                                if (figuras[j].getTFigura() == 1) {
                                    figuras.splice(j, 1);
                                    figuras.push(new FiguraDescomponer(app, 3));
                                    figuras.push(new FiguraDescomponer(app, 3));
                                    secuencia = secuencia + "" + n;
                                    return;

                                } 
                            }

                            break;
                        case 2:
                            for (let j = 0; j < figuras.length; j++) {
                                if (figuras[j].getTFigura() == 2) {
                                    figuras.splice(j, 1);
                                    figuras.push(new FiguraDescomponer(app, 1));
                                    figuras.push(new FiguraDescomponer(app, 1));
                                    secuencia = secuencia + "" + n;
                                    return;
                                }
                            }
                            break;
                        case 3:
                            var num = 0;
                            var indice1;
                            var indice2;
                            for (let j = 0; j < figuras.length; j++) {
                                if (figuras[j].getTFigura() == 1 || figuras[j].getTFigura() == 3) {
                                    if (num < 2) {
                                        if (indice1 == null) {
                                            indice1 = j;
                                            num++;
                                        } else {
                                            if (figuras[j].getTFigura() != figuras[indice1].getTFigura()) {
                                                indice2 = j;
                                                num++;
                                            }
                                        }
                                    }
                                }
                            }
                            if (num == 2) {
                                figuras.push(new FiguraDescomponer(app, 2));
                                figuras.splice(indice1, 1);
                                figuras.splice(indice2-1, 1);
                                secuencia = secuencia + "" + n;
                                return;
                            }

                            break;
                        case 4:
                            var num = 0;
                            var indice1;
                            var indice2;
                            for (let j = 0; j < figuras.length; j++) {
                                if (figuras[j].getTFigura() == 2) {
                                    if (num < 2) {
                                        if (indice1 == null) {
                                            indice1 = j;
                                            num++;
                                        } else {

                                            indice2 = j;
                                            num++;


                                        }
                                    }
                                }
                            }
                            if (num == 2) {
                                figuras.push(new FiguraDescomponer(app, 1));
                                figuras.push(new FiguraDescomponer(app, 3));
                                figuras.push(new FiguraDescomponer(app, 3));
                                figuras.splice(indice1, 1);
                                figuras.splice(indice2-1, 1);
                                secuencia = secuencia + "" + n;
                                return;
                            }
                            break;
                        case 5:
                            var num = 0;
                            var indice1;
                            var indice2;
                            var indice3;
                            for (let j = 0; j < figuras.length; j++) {
                                if (figuras[j].getTFigura() == 3) {
                                    if (num < 3) {
                                        switch(num){
                                            case 0:
                                                indice1 = j;
                                                num++;
                                            break;
                                            case 1:
                                                indice2 = j;
                                                num++;                                            
                                            break;
                                            case 2:
                                                indice3 = j;
                                                num++;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (num == 3) {
                                figuras.splice(indice1, 1);
                                figuras.splice(indice2-1, 1);
                                figuras.splice(indice3-2, 1);
                                secuencia = secuencia + "" + n;
                            }
                            break;


                        }
                                if (secuencia.lastIndexOf != n) {
                                    errores++;
                                    sessionStorage.setItem("ErroresDescomposicion", errores);
                                    console.log(errores);
                                }
                } else {
                    secuencia = "";
                    figuras = [];
                    figuras.push(new FiguraDescomponer(app, 2));
                    figuras.push(new FiguraDescomponer(app, 2));
                    figuras.push(new FiguraDescomponer(app, 1));
                    figuras.push(new FiguraDescomponer(app, 3));
                    figuras.push(new FiguraDescomponer(app, 2));
                }

            }
        }
    }

    }



});