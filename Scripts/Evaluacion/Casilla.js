class Casilla {

    static errores = 0;

    constructor(app, x, y, n, npiezas) {
        this.app=app;
        this.x=x;
        this.y=y;
        this.n=n;
        this.active = false;
        this.correcto = false;
        this.w = (this.app.width-(this.app.width*0.2))/npiezas;
        this.h = (this.app.height-(this.app.height*0.2))/npiezas;
        this.unlock = this.unlock.bind(this);
    }

    show(){
        this.app.stroke(255);
        if (this.active == true) {
            if (this.correcto == true) {
                this.app.fill(0);
            } else {
                this.app.fill(255,0,0,51);
            }
        } else {
            this.app.fill(24,195,200,51);
        }
        this.app.rect(this.x,this.y,this.w,this.h);

    }

    press(mx, my) {
        if (this.active == false) {
        if (mx>this.x && mx<this.x+this.w && my>this.y && my<this.y+this.h) {
            console.log("Yes");
            if (this.n == 1) {
                this.correcto = true;
                this.active = true;
            } else {
                this.correcto = false;
                this.active = true;
                Casilla.errores ++;
                this.ul = setTimeout(this.unlock, 1000)
            }
        }
    }
    } 

    unlock(){
        this.active = false;
    }

    getCorrecto(){
        return this.correcto;
    }
    getActive(){
        return this.active;
    }
    get

}