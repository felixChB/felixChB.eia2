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
            let wings = new Path2D();
            wings.moveTo(this.x + 5, this.y - 10);
            wings.lineTo(this.x - 7, this.y - 40);
            wings.lineTo(this.x - 20, this.y - 40);
            wings.lineTo(this.x - 15, this.y - 10);
            wings.lineTo(this.x, this.y - 10);
            wings.moveTo(this.x + 5, this.y + 10);
            wings.lineTo(this.x - 7, this.y + 40);
            wings.lineTo(this.x - 20, this.y + 40);
            wings.lineTo(this.x - 15, this.y + 10);
            wings.lineTo(this.x, this.y + 10);
            game.crc.fillStyle = "blue";
            game.crc.strokeStyle = "black";
            game.crc.fill(wings);
            game.crc.stroke(wings);
            let body = new Path2D();
            body.moveTo(this.x, this.y);
            body.moveTo(this.x + 30, this.y);
            body.lineTo(this.x, this.y - 15);
            body.lineTo(this.x - 10, this.y - 15);
            body.lineTo(this.x - 25, this.y - 10);
            body.lineTo(this.x - 25, this.y + 10);
            body.lineTo(this.x, this.y + 15);
            body.lineTo(this.x - 10, this.y + 15);
            body.lineTo(this.x + 30, this.y);
            game.crc.fillStyle = "grey";
            game.crc.strokeStyle = "black";
            game.crc.fill(body);
            game.crc.stroke(body);
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