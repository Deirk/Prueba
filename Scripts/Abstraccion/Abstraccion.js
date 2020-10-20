new p5(function (app) {

    var ejercicios;
    var btn = [];
    var respuestas = [];
    var database;
    app.setup = function () {

        this.cnv = app.createCanvas(app.windowWidth *0.3, app.windowHeight * 0.5);
        this.cnv.parent('Abstraccion');
        app.rectMode(app.CENTER);
        app.textAlign(app.CENTER, app.CENTER);
        ejercicios = new Ejercicio(app);
        
    }

    app.preload = function () {

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