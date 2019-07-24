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
            this.y = Math.random() * game.canvas.height;
            this.dx = Math.random() * (-20) - 15;
            this.dy = 0;
            this.r = (Math.random() * (60 - 5) + 30);
            this.t = Math.random() * 0.8;
            this.color = `rgb(133, 133, 173, ${this.t})`;
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
            if (this.x < -25) {
                this.x = game.canvas.width + 25;
                this.y = Math.random() * game.canvas.height;
                this.dx = Math.random() * (-20) - 15;
            }
        }
    }
    game.Bubble = Bubble;
})(game || (game = {}));
//# sourceMappingURL=bubble.js.map