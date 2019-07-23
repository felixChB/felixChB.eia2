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
        }
        update() {
            this.move("zero");
            this.draw();
        }
        move(_case) {
            switch (_case) {
                case "up": {
                    this.dy = -10;
                    break;
                }
                case "down": {
                    this.dy = 10;
                    break;
                }
                case "left": {
                    this.dx = -10;
                    break;
                }
                case "right": {
                    this.dx = 10;
                    break;
                }
                case "zero": {
                    this.dx = 0;
                    this.dy = 0;
                }
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        crash(_other) {
        }
    }
    game.Player = Player;
})(game || (game = {}));
//# sourceMappingURL=player.js.map