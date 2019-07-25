/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
//eigentlich ein raumschiff
var game;
(function (game) {
    class Fish extends game.GameObj {
        constructor() {
            super();
            this.x = game.canvas.width + 100;
            this.y = (Math.random() * (game.canvas.height - 50) + 50);
            this.dx = (Math.random() * 10) - 15;
            this.dy = Math.random() * 4 - 2;
            this.h = 25;
        }
        draw() {
            let guns = new Path2D();
            guns.moveTo(this.x + 10, this.y + 25);
            guns.lineTo(this.x - 25, this.y + 25);
            guns.lineTo(this.x - 25, this.y + 15);
            guns.lineTo(this.x + 10, this.y + 15);
            guns.lineTo(this.x + 10, this.y + 25);
            guns.moveTo(this.x + 10, this.y - 25);
            guns.lineTo(this.x - 25, this.y - 25);
            guns.lineTo(this.x - 25, this.y - 15);
            guns.lineTo(this.x + 10, this.y - 15);
            guns.lineTo(this.x + 10, this.y - 25);
            game.crc.fillStyle = "darkred";
            game.crc.strokeStyle = "black";
            game.crc.fill(guns);
            game.crc.stroke(guns);
            let fire = new Path2D();
            fire.moveTo(this.x, this.y);
            fire.moveTo(this.x + 10, this.y + 12);
            fire.lineTo(this.x + 55, this.y);
            fire.lineTo(this.x + 10, this.y - 12);
            game.crc.fillStyle = "lightblue";
            game.crc.strokeStyle = "black";
            game.crc.fill(fire);
            game.crc.stroke(fire);
            let fire2 = new Path2D();
            fire2.moveTo(this.x, this.y);
            fire2.moveTo(this.x + 10, this.y + 8);
            fire2.lineTo(this.x + 45, this.y);
            fire2.lineTo(this.x + 10, this.y - 8);
            game.crc.fillStyle = "cyan";
            game.crc.fill(fire2);
            let body = new Path2D();
            body.moveTo(this.x, this.y);
            body.moveTo(this.x - 40, this.y);
            body.quadraticCurveTo(this.x - 10, this.y + 5, this.x + 10, this.y + 30);
            body.lineTo(this.x + 20, this.y + 30);
            body.lineTo(this.x + 20, this.y - 30);
            body.lineTo(this.x + 10, this.y - 30);
            body.quadraticCurveTo(this.x - 10, this.y - 5, this.x - 40, this.y);
            game.crc.fillStyle = "darkgrey";
            game.crc.strokeStyle = "black";
            game.crc.fill(body);
            game.crc.stroke(body);
            let window = new Path2D();
            window.moveTo(this.x, this.y);
            window.moveTo(this.x + 5, this.y + 12);
            window.lineTo(this.x - 25, this.y);
            window.lineTo(this.x + 5, this.y - 12);
            window.lineTo(this.x + 5, this.y + 12);
            game.crc.fillStyle = "lightgrey";
            game.crc.strokeStyle = "black";
            game.crc.fill(window);
            game.crc.stroke(window);
            let hitboxF = new Path2D();
            hitboxF.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
            game.crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
            game.crc.stroke(hitboxF);
        }
        move() {
            super.move();
            if (this.x < (-100)) {
                this.x = game.canvas.width + 100;
                this.y = (Math.random() * (game.canvas.height - 50) + 50);
                this.dx = (Math.random() * 10) - 15;
                this.dy = Math.random() * 4 - 2;
            }
            if (this.y > (game.crc.canvas.height + 50)) {
                this.x = game.canvas.width + 100;
                this.y = (Math.random() * (game.canvas.height - 50) + 50);
                this.dx = (Math.random() * 10) - 15;
                this.dy = Math.random() * 4 - 2;
            }
            if (this.y < (-50)) {
                this.x = game.canvas.width + 100;
                this.y = (Math.random() * (game.canvas.height - 50) + 50);
                this.dx = (Math.random() * 10) - 15;
                this.dy = Math.random() * 4 - 2;
            }
        }
    }
    game.Fish = Fish;
})(game || (game = {}));
//# sourceMappingURL=fish.js.map