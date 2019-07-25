/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    class PlayChar {
        constructor() {
            this.x = game.canvas.width / 2;
            this.y = game.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
            this.h = 20;
            this.life = 3;
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
            let fire = new Path2D();
            fire.moveTo(this.x, this.y);
            fire.moveTo(this.x - 23, this.y + 8);
            fire.lineTo(this.x - 45, this.y);
            fire.lineTo(this.x - 23, this.y - 8);
            game.crc.fillStyle = "red";
            game.crc.strokeStyle = "black";
            game.crc.fill(fire);
            game.crc.stroke(fire);
            let fire2 = new Path2D();
            fire2.moveTo(this.x, this.y);
            fire2.moveTo(this.x - 23, this.y + 4);
            fire2.lineTo(this.x - 38, this.y);
            fire2.lineTo(this.x - 23, this.y - 4);
            game.crc.fillStyle = "orange";
            game.crc.fill(fire2);
            let body = new Path2D();
            body.moveTo(this.x, this.y);
            body.moveTo(this.x + 30, this.y);
            body.lineTo(this.x, this.y - 15);
            body.lineTo(this.x - 10, this.y - 15);
            body.lineTo(this.x - 25, this.y - 10);
            body.lineTo(this.x - 25, this.y + 10);
            body.lineTo(this.x - 10, this.y + 15);
            body.lineTo(this.x, this.y + 15);
            body.lineTo(this.x + 30, this.y);
            game.crc.fillStyle = "grey";
            game.crc.strokeStyle = "black";
            game.crc.fill(body);
            game.crc.stroke(body);
            let window = new Path2D();
            window.moveTo(this.x, this.y);
            window.moveTo(this.x + 8, this.y + 5);
            window.lineTo(this.x + 8, this.y + 7);
            window.lineTo(this.x - 3, this.y + 10);
            window.lineTo(this.x - 5, this.y + 10);
            window.lineTo(this.x - 5, this.y - 10);
            window.lineTo(this.x - 3, this.y - 10);
            window.lineTo(this.x + 8, this.y + -7);
            window.lineTo(this.x + 8, this.y + 5);
            game.crc.fillStyle = "lightgrey";
            game.crc.strokeStyle = "black";
            game.crc.fill(window);
            game.crc.stroke(window);
            let hitboxP = new Path2D();
            hitboxP.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
            game.crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
            game.crc.stroke(hitboxP);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x >= game.canvas.width - this.h) {
                this.x = game.canvas.width - this.h;
            }
            else if (this.x <= 0 + this.h) {
                this.x = 0 + this.h;
            }
            else if (this.y >= game.canvas.height - this.h) {
                this.y = game.canvas.height - this.h;
            }
            else if (this.y <= 0 + this.h) {
                this.y = 0 + this.h;
            }
        }
    }
    game.PlayChar = PlayChar;
})(game || (game = {}));
//# sourceMappingURL=player.js.map