/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
//sind eigentlich wolken
var game;
(function (game) {
    class Bubble extends game.GameObj {
        constructor() {
            super();
            this.x = Math.random() * game.canvas.width;
            this.y = Math.random() * game.canvas.height;
            this.dx = Math.random() * (-20) - 15;
            this.dy = 0;
            this.r = (Math.random() * (80 - 5) + 45);
            this.t = Math.random() * 0.8;
            this.color = `rgb(153, 153, 153, ${this.t})`;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            game.crc.lineWidth = 2;
            game.crc.fillStyle = this.color;
            game.crc.strokeStyle = this.color;
            game.crc.fill(bubble);
            game.crc.stroke(bubble);
        }
        move() {
            super.move();
            if (this.x < -100) {
                this.x = game.canvas.width + 100;
                this.y = Math.random() * game.canvas.height;
                this.dx = Math.random() * (-20) - 15;
            }
        }
    }
    game.Bubble = Bubble;
})(game || (game = {}));
//# sourceMappingURL=bubble.js.map