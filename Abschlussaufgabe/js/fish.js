/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class Fish extends game.GameObj {
        constructor() {
            super();
            this.x = Math.random() * game.canvas.width;
            this.y = Math.random() * game.canvas.height - 100;
            this.dx = Math.random() * 10;
            this.dy = Math.random() * 10 - 5;
            this.h = 40;
        }
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 20, 40, 30, 0, 2 * Math.PI);
            game.crc.lineWidth = 1;
            game.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.fill(body);
            game.crc.stroke(body);
            let flosse = new Path2D();
            game.crc.beginPath();
            flosse.moveTo(this.x - 35, this.y - 7);
            flosse.lineTo(this.x - 80, this.y - 30);
            flosse.lineTo(this.x - 85, this.y + 20);
            game.crc.closePath();
            game.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.fill(flosse);
            game.crc.stroke(flosse);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 28, this.y, 5, 0, 2 * Math.PI);
            game.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.fill(fishEye);
            game.crc.stroke(fishEye);
            let fishPupille = new Path2D();
            fishPupille.arc(this.x + 30, this.y, 3, 0, 2 * Math.PI);
            game.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            game.crc.fill(fishPupille);
            game.crc.stroke(fishPupille);
            let fishMouth = new Path2D();
            fishMouth.moveTo(this.x + 38, this.y + 12);
            fishMouth.lineTo(this.x + 36, this.y + 8);
            fishMouth.lineTo(this.x + 34, this.y + 12);
            fishMouth.lineTo(this.x + 32, this.y + 8);
            fishMouth.lineTo(this.x + 30, this.y + 12);
            fishMouth.lineTo(this.x + 28, this.y + 8);
            game.crc.stroke(fishMouth);
            let hitboxF = new Path2D();
            hitboxF.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
            game.crc.strokeStyle = "white";
            game.crc.stroke(hitboxF);
        }
        move() {
            super.move();
            if (this.x > (game.crc.canvas.width + 80)) {
                this.x = -120;
            }
            if (this.y > (game.crc.canvas.height + 50)) {
                this.y = -50;
            }
            if (this.y < (-50)) {
                this.y = (game.crc.canvas.height + 50);
            }
        }
    }
    game.Fish = Fish;
})(game || (game = {}));
//# sourceMappingURL=fish.js.map