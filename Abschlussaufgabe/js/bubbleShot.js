/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class BubbleShot extends game.GameObj {
        constructor() {
            super();
            this.dx = 20;
            this.dy = 0;
            this.r = 10;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            game.crc.lineWidth = 2;
            game.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.fill(bubble);
            game.crc.stroke(bubble);
        }
        move() {
            super.move();
        }
    }
    game.BubbleShot = BubbleShot;
})(game || (game = {}));
//# sourceMappingURL=bubbleShot.js.map