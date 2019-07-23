/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class Player {
        constructor() {
            this.x = game.canvas.width / 2;
            this.y = game.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
            this.h = 30;
        }
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 20, 40, 30, 0, 2 * Math.PI);
            game.crc.lineWidth = 1;
            game.crc.fillStyle = `rgba(${(255)}, ${(255)}, ${(255)})`;
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
            let hitboxP = new Path2D();
            hitboxP.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
            game.crc.strokeStyle = "white";
            game.crc.stroke(hitboxP);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x >= game.canvas.width) {
                this.x = game.canvas.width;
            }
            else if (this.x <= 0) {
                this.x = 0;
            }
            else if (this.y >= game.canvas.height) {
                this.y = game.canvas.height;
            }
            else if (this.y <= 0) {
                this.y = 0;
            }
        }
    }
    game.Player = Player;
})(game || (game = {}));
//# sourceMappingURL=player.js.map