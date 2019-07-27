/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class Crab extends game.GameObj {
        constructor() {
            super();
            this.x = game.canvas.width + 50;
            this.y = Math.random() * game.canvas.height;
            this.dx = Math.random() * 10 - 12;
            this.dy = 0;
            this.h = 15;
        }
        draw() {
            let herz = new Path2D();
            herz.moveTo(this.x, this.y);
            herz.moveTo(this.x, this.y + 20);
            herz.lineTo(this.x + 15, this.y);
            herz.quadraticCurveTo(this.x + 7, this.y - 15, this.x, this.y);
            herz.quadraticCurveTo(this.x - 7, this.y - 15, this.x - 15, this.y);
            herz.lineTo(this.x, this.y + 20);
            game.crc.fillStyle = "red";
            game.crc.strokeStyle = "black";
            game.crc.fill(herz);
            game.crc.stroke(herz);
            let hitboxC = new Path2D();
            hitboxC.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
            game.crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
            game.crc.stroke(hitboxC);
        }
        move() {
            super.move();
            if (this.x < (-82)) {
                this.x = game.crc.canvas.width + 50;
                this.y = Math.random() * game.canvas.height;
                this.dx = Math.random() * 10 - 12;
            }
        }
    }
    game.Crab = Crab;
})(game || (game = {}));
//# sourceMappingURL=crab.js.map