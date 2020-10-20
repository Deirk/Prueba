class Casilla {

    constructor(app, x, y, n, indice) {
        this.select = false;
        this.app = app;
        this.x = x;
        this.y = y;
        this.n = n;
        this.h4 = this.app.width / 10;
        this.w4 = this.app.width / 15;
        this.h = this.app.width / 15;
        this.w = this.app.width / 15;
        this.indice = indice;
        this.app.textSize(this.app.width / 30);
        this.literales = ["a", "b", "c"];
        
        switch (this.n) {
            case 1:
                this.info = ["44", "62", "80", "08", "?", "44", "26", "62", "10"];
                if (this.indice>5) {
                    this.literal = this.literales[this.indice-6];
                }
                break;
            case 2:
                this.info = ["🡕", "🡓", "🡔", "🡒", "🡗", "?", "🡖", "🡐", "🡑"];
                if (this.indice>5) {
                    this.literal = this.literales[this.indice-6];
                }
                break;
            case 3:
                this.info = ["abc", "hij", "cde", "jkl", "?", "lmn", "efg", "nop", "klm"];
                if (this.indice>5) {
                    this.literal = this.literales[this.indice-6];
                }
                break;
            case 4:
                switch (this.indice) {
                    case 0:
                        this.info = [1, 1, 0, 0, 0, 1];
                        break;

                    case 1:
                        this.info = [0, 0, 1, 0, 1, 1];
                        break;

                    case 2:
                        this.info = [1, 1, 0, 1, 0, 0];
                        break;

                    case 3:
                        this.info = [1, 0, 0, 1, 1, 0];
                        break;

                    case 4:
                        this.info = ["?", "?", "?", "?", "?", "?", "?", "?"];
                        break;

                    case 5:
                        this.info = [1, 0, 0, 0, 0, 1];
                        break;

                    case 6:
                        this.info = [0, 0, 0, 1, 1, 1];
                        break;

                    case 7:
                        this.info = [0, 1, 1, 1, 1, 0];
                        break;


                }
                if (this.indice>4) {
                    this.literal = this.literales[this.indice-5];
                }
                break;

        }
    }

    show() {

        if (this.n == 4) {
            if (this.indice > 4) {
                if (this.app.mouseX > this.x + (this.w4 * 0.2) && this.app.mouseX < (this.w4 * 1.3) + this.x && this.app.mouseY > this.y - (this.h4 / 6) && this.app.mouseY < this.y + (this.h4 * 1.4)) {
                    this.app.stroke(249, 70, 115,100);
                    this.app.strokeWeight(2)
                } else {
                    if(this.select){
                        this.app.stroke(249, 70, 115);
                        this.app.strokeWeight(3)
                    }
                    else{
                        
                        this.app.stroke(255);
                    }
                }
            } else {
                this.app.stroke(255);
            }

            let c = 1;
            let r = 1;
            for (let i = 0; i < 6; i++) {

                if (this.info[i] == "?") {
                    this.app.noStroke();
                    this.app.fill(230, 30);
                    this.app.rect((this.x + this.w4), (this.y + this.h4 / 3), this.app.width / 13, this.app.width / 13);
                    this.app.fill(255);
                    this.app.rect((this.x + (this.w4)), (this.y + this.h4 / 3), this.w, this.h);
                    this.app.fill(200);
                    this.app.text(this.info[i], (this.x + this.w4), (this.y + this.h4 / 3));
                } else if (this.info[i] != "?") {
                    if (this.info[i] == 1) {
                        this.app.fill(24, 195, 200);
                    } else {
                        this.app.fill(14, 231, 136);
                    }
                    this.app.rect((this.x + this.w4 / 5) + ((this.w4 / 4) * r), (this.y - this.h4 / 5) + ((this.h4 / 6) * c), this.w4 / 2, this.h4 / 3);
                    r += 2;
                    if (r > 3) {
                        r = 1;
                        c += 2;
                    }
                }
            }
            if (this.indice > 4) {
                this.app.noStroke();
                this.app.fill(180);
                this.app.text(this.literales[this.indice - 5], (this.x + this.w4 / 1.4), this.y - (this.h));
            }
        } else {
            this.app.noStroke();
            if (this.info[this.indice] == "?") {
                this.app.fill(150, 30);
                this.app.rect(this.x, this.y, this.app.width / 13, this.app.width / 13);
            } else {
                this.app.fill(47, 128, 237, 30);
                this.app.rect(this.x + (this.app.width * 0.005), this.y + (this.app.width * 0.005), this.app.width / 14, this.app.width / 14);
            }
            if (this.indice > 5) {
                if (this.n <= 3) {
                    if (this.app.mouseX > this.x - (this.w / 2) && this.app.mouseX < (this.w / 2) + this.x && this.app.mouseY > this.y - (this.h / 2) && this.app.mouseY < this.y + (this.h / 2)) {
                        if(this.select){
                            this.app.fill(249, 70, 115,150);
                        } else {
                        this.app.fill(47, 128, 237, 200);
                        }
                    } else {
                        if(this.select){
                            this.app.fill(249, 70, 115);
                        } else {

                        this.app.fill(47, 128, 237);
                    }
                }

                } else {
                    this.app.fill(47, 128, 237);
                }
            } else {
                if (this.info[this.indice] == "?") {
                    this.app.fill(255);
                } else {
                    this.app.fill(47, 128, 237);
                }

            }
            this.app.rect(this.x, this.y, this.w, this.h);
            if (this.info[this.indice] == "?") {
                this.app.fill(200);
            } else {
                this.app.fill(255);
            }

            this.app.text(this.info[this.indice], this.x, this.y);
            if (this.indice > 5) {
                this.app.fill(180);
                this.app.text(this.literales[this.indice - 6], this.x, this.y - (this.h));
            }

        }
    }

    press(mx, my) {
        if (this.n <= 3) {
            if (this.indice > 5) {
                if (mx > this.x - (this.w / 2) && mx < (this.w / 2) + this.x && my > this.y - (this.h / 2) && my < this.y + (this.h / 2)) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            if (this.indice > 4) {
                if (this.app.mouseX > this.x + (this.w4 * 0.2) && this.app.mouseX < (this.w4 * 1.3) + this.x && this.app.mouseY > this.y - (this.h4 / 6) && this.app.mouseY < this.y + (this.h4 * 1.4)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    getLiteral() {
        return this.literal;
    }

    setSelect(value){
        this.select = value;
    }

}