/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class Bubble extends game.GameObj {
        constructor() {
            super();
            this.x = Math.random() * game.canvas.width;
            this.y = Math.random() * game.canvas.height - 70;
            this.dx = 0;
            this.dy = Math.random() * (-5) - 2;
            this.r = (Math.random() * (15 - 5) + 5);
            this.t = Math.random();
            this.color = `rgba(167, 211, 223, ${this.t})`;
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
            if (this.y < -25) {
                this.y = 525;
            }
        }
    }
    game.Bubble = Bubble;
})(game || (game = {}));
//# sourceMappingURL=bubble.js.map