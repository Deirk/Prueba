class Pieza {

    constructor(app, imagen, numero) {
        this.select = false;
        this.app = app;
        this.imagen = imagen;
        this.h = this.app.height / 4;
        this.w = this.app.width / 4;
        this.numero = numero;
        this.app.noStroke();
        this.app.textSize(this.app.width / 30)
    }

    show(x, y) {
        this.app.imageMode(this.app.CORNER);
        this.x = x;
        this.y = y;
        if(this.select == false){
            this.app.image(this.imagen, x, y, this.w, this.h);
        } else {
            
        }
    }
    press(mx, my) {
        if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y+this.h) {
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.numero
    }
    setSelect(value){
        this.select = value;
    }
    
}