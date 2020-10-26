new p5(function (app) {

    var ejercicios;
    var btn = [];
    var imagenes = [];
    var respuestas = [];
    var database;
    app.setup = function () {
        this.cnv = app.createCanvas(app.windowWidth *0.3, app.windowHeight * 0.5);
        this.cnv.parent('Abstraccion');
        app.rectMode(app.CENTER);
        app.textAlign(app.CENTER, app.CENTER);
        app.imageMode(app.CENTER);
        ejercicios = new Ejercicio(app,imagenes);
        
    }

    app.preload = function () {
        for (let i = 0; i < 9; i++) {
                       if(i == 4){
                           imagenes.push("?");
                       } else {
                            imagenes.push(app.loadImage("../Imagenes/Abstraccion/" + (i + 1) + ".png"));
                       }
        }
        console.log(imagenes);
    }

    app.draw = function () {
        app.background(255);
        ejercicios.show();
        
    }

    app.mousePressed = function () {

    }

    app.mouseReleased = function () {
      ejercicios.press(app.mouseX,app.mouseY);
    }

    app.keyPressed = function () {

    }

});