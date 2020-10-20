class FiguraDescomponer {

    constructor(app, tFigura) {
        this.app = app;
        this.tFigura = tFigura;
        this.app.noStroke();
    }

    show(x,y) {
        switch (this.tFigura) {
            case 1:
                this.app.fill(31, 141, 237);
                this.app.triangle(x - this.app.width / 30, y + this.app.width / 30, x + this.app.width / 30, y + this.app.width / 30, x, y - this.app.width / 30);
                break;
            case 2:
                this.app.fill(24, 195, 200);
                this.app.rect(x, y, this.app.width / 15, this.app.width / 15);
                break;

            case 3:
                this.app.fill(249, 70, 115);
                this.app.ellipse(x, y, this.app.width / 15, this.app.width / 15);
                break;



        }
    }

    getTFigura(){
        return this.tFigura;
    }
}