/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    class Fish {
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 20, 40, 30, 0, 2 * Math.PI);
            aquarium.crc.lineWidth = 1;
            aquarium.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.fill(body);
            aquarium.crc.stroke(body);
            let flosse = new Path2D();
            aquarium.crc.beginPath();
            flosse.moveTo(this.x - 35, this.y - 7);
            flosse.lineTo(this.x - 80, this.y - 30);
            flosse.lineTo(this.x - 85, this.y + 20);
            aquarium.crc.closePath();
            aquarium.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.fill(flosse);
            aquarium.crc.stroke(flosse);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 28, this.y, 5, 0, 2 * Math.PI);
            aquarium.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.fill(fishEye);
            aquarium.crc.stroke(fishEye);
            let fishPupille = new Path2D();
            fishPupille.arc(this.x + 30, this.y, 3, 0, 2 * Math.PI);
            aquarium.crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
            aquarium.crc.fill(fishPupille);
            aquarium.crc.stroke(fishPupille);
            let fishMouth = new Path2D();
            fishMouth.moveTo(this.x + 38, this.y + 12);
            fishMouth.lineTo(this.x + 36, this.y + 8);
            fishMouth.lineTo(this.x + 34, this.y + 12);
            fishMouth.lineTo(this.x + 32, this.y + 8);
            fishMouth.lineTo(this.x + 30, this.y + 12);
            fishMouth.lineTo(this.x + 28, this.y + 8);
            aquarium.crc.stroke(fishMouth);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 1080) {
                this.x = -120;
            }
            if (this.y > 550) {
                this.y = -50;
            }
            if (this.y < (-50)) {
                this.y = 550;
            }
        }
    }
    aquarium.Fish = Fish;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=fish.js.map