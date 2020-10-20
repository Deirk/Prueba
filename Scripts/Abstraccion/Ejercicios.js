class Ejercicio {

    constructor(app) {
        this.app = app;
        this.app.noStroke();
        this.app.textSize(this.app.width / 30)
        this.ejercicio1 = [];
        for (let i = 0; i < 9; i++) {
            if (i < 6) {
                this.ejercicio1.push(new Casilla(app, (app.width / 13) * (2 + i), (app.height / 10) * 2, 1, i));
            } else {
                this.ejercicio1.push(new Casilla(app, (app.width / 13) * (3 + i), (app.height / 10) * 2, 1, i));
            }
        }
        this.ejercicio2 = [];
        for (let i = 0; i < 9; i++) {
            if (i < 6) {
                this.ejercicio2.push(new Casilla(app, (app.width / 13) * (2 + i), (app.height / 10) * 4, 2, i));
            } else {
                this.ejercicio2.push(new Casilla(app, (app.width / 13) * (3 + i), (app.height / 10) * 4, 2, i));
            }
        }
        this.ejercicio3 = [];
        for (let i = 0; i < 9; i++) {
            if (i < 6) {
                this.ejercicio3.push(new Casilla(app, (app.width / 13) * (2 + i), (app.height / 10) * 6, 3, i));
            } else {
                this.ejercicio3.push(new Casilla(app, (app.width / 13) * (3 + i), (app.height / 10) * 6, 3, i));
            }
        }
        this.ejercicio4 = [];
        for (let i = 0; i < 8; i++) {
            if (i < 5) {
                this.ejercicio4.push(new Casilla(app, (app.width / 13) * (1.4 + i), (app.height / 10) * 8, 4, i));
            } else {
                this.ejercicio4.push(new Casilla(app, (app.width / 13) * (3.4 + i), (app.height / 10) * 8, 4, i));
            }
        }

        this.data = {
            Abstraccion1: 0,
            Abstraccion2: 0,
            Abstraccion3: 0,
            Abstraccion4: 0
        }

    }

    show() {
        for (let i = 0; i < this.ejercicio1.length; i++) {
            this.ejercicio1[i].show();
        }
        for (let i = 0; i < this.ejercicio2.length; i++) {
            this.ejercicio2[i].show();
        }
        for (let i = 0; i < this.ejercicio3.length; i++) {
            this.ejercicio3[i].show();
        }
        for (let i = 0; i < this.ejercicio4.length; i++) {
            this.ejercicio4[i].show();
        }
        if (this.data.Abstraccion1 != 0 && this.data.Abstraccion2 != 0 && this.data.Abstraccion4 != 0 && this.data.Abstraccion4 != 0) {
            var timeBtn = document.getElementById("time__btn");
            var link;
            timeBtn.textContent = "Continuar" ;
            if (sessionStorage.getItem("Ejercicio1completo") == "true" && sessionStorage.getItem("Ejercicio2completo") == "true" && sessionStorage.getItem("Ejercicio3completo") == "true" && sessionStorage.getItem("Ejercicio4completo") == "true") {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Experiencia.html");
            } else {
                link = document.getElementById("btnLink");
                link.setAttribute('href', "Ejercicios.html");
            }
            sessionStorage.setItem("RespuestaEjercicio1Abstraccion", this.data.Abstraccion1);
            sessionStorage.setItem("RespuestaEjercicio2Abstraccion", this.data.Abstraccion2);
            sessionStorage.setItem("RespuestaEjercicio3Abstraccion", this.data.Abstraccion3);
            sessionStorage.setItem("RespuestaEjercicio4Abstraccion", this.data.Abstraccion4);
            
        }
    }
    press(mx, my) {
        for (let i = 0; i < this.ejercicio1.length; i++) {
            if (this.ejercicio1[i].press(mx, my) == true) {
                console.log(this.ejercicio1[i].press(mx, my));
                this.data.Abstraccion1 = this.ejercicio1[i].getLiteral();
                for (let h = 0; h < this.ejercicio1.length; h++) {
                    this.ejercicio1[h].setSelect(false);
                }
                this.ejercicio1[i].setSelect(true);
                console.log(this.data);
            }
        }
        for (let i = 0; i < this.ejercicio2.length; i++) {
            if (this.ejercicio2[i].press(mx, my) == true) {
                console.log(this.ejercicio2[i].press(mx, my));
                this.data.Abstraccion2 = this.ejercicio2[i].getLiteral();
                for (let h = 0; h < this.ejercicio2.length; h++) {
                    this.ejercicio2[h].setSelect(false);
                }
                this.ejercicio2[i].setSelect(true);
                console.log(this.data);
            }
        }
        for (let i = 0; i < this.ejercicio3.length; i++) {
            if (this.ejercicio3[i].press(mx, my) == true) {
                console.log(this.ejercicio3[i].press(mx, my));
                this.data.Abstraccion3 = this.ejercicio3[i].getLiteral();
                for (let h = 0; h < this.ejercicio3.length; h++) {
                    this.ejercicio3[h].setSelect(false);
                }
                this.ejercicio3[i].setSelect(true);
                console.log(this.data);
            }
        }
        for (let i = 0; i < this.ejercicio4.length; i++) {
            if (this.ejercicio4[i].press(mx, my) == true) {
                console.log(this.ejercicio4[i].press(mx, my));
                this.data.Abstraccion4 = this.ejercicio4[i].getLiteral();
                for (let h = 0; h < this.ejercicio4.length; h++) {
                    this.ejercicio4[h].setSelect(false);
                }
                this.ejercicio4[i].setSelect(true);
                console.log(this.data);
            }
        }
    }

    getNumero() {
        return this.numero
    }
}