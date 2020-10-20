class BotonesDescomponer {

    constructor(app, x, y, numero) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.h = this.app.width / 15;
        this.w = this.app.width / 15;
        this.numero = numero;
        this.app.noStroke();
        this.app.textSize(this.app.width / 30)
    }

    show() {
        this.app.fill(84, 87, 193, 30);
        this.app.rect(this.x + (this.app.width * 0.005), this.y + (this.app.width * 0.005), this.app.width / 14, this.app.width / 14);
        if (this.numero != "⟲") {
            if (this.app.mouseX > this.x - (this.w / 2) && this.app.mouseX < (this.w / 2) + this.x && this.app.mouseY > this.y - (this.h / 2) && this.app.mouseY < this.y + (this.h / 2)) {
                this.app.fill(84, 87, 193, 200);
            } else {
                this.app.fill(84, 87, 193);
            }
        } else {
            if (this.app.mouseX > this.x - (this.w / 2) && this.app.mouseX < (this.w / 2) + this.x && this.app.mouseY > this.y - (this.h / 2) && this.app.mouseY < this.y + (this.h / 2)) {
                this.app.fill(249, 70, 115,200);
            } else {
                this.app.fill(249, 70, 115);
            }
        }
        this.app.rect(this.x, this.y, this.w, this.h);

        this.app.fill(255);

        this.app.text(this.numero, this.x, this.y)
    }
    press(mx, my) {
        if (mx > this.x - (this.w / 2) && mx < (this.w / 2) + this.x && my > this.y - (this.h / 2) && my < this.y + (this.h / 2)) {
            return true;
            
        } else {
            return false;
        }
    }

    getNumero(){
        return this.numero
    }
}