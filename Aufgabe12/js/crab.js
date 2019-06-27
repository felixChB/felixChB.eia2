/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    class Crab {
        draw() {
            let crabBody = new Path2D;
            crabBody.moveTo(this.x, this.y);
            crabBody.lineTo(this.x + 20, this.y - 20);
            crabBody.lineTo(this.x + 40, this.y - 30);
            crabBody.lineTo(this.x + 45, this.y - 35);
            crabBody.lineTo(this.x + 60, this.y - 40);
            crabBody.lineTo(this.x + 58, this.y - 35);
            crabBody.lineTo(this.x + 50, this.y - 30);
            crabBody.lineTo(this.x + 40, this.y - 18);
            crabBody.lineTo(this.x + 25, this.y - 10);
            crabBody.lineTo(this.x, this.y + 5);
            crabBody.lineTo(this.x - 15, this.y + 10);
            crabBody.lineTo(this.x - 12.5, this.y);
            crabBody.lineTo(this.x - 15, this.y - 10);
            crabBody.lineTo(this.x, this.y);
            aquarium.crc.fillStyle = this.color;
            aquarium.crc.strokeStyle = this.color;
            aquarium.crc.fill(crabBody);
            aquarium.crc.stroke(crabBody);
            let crabLegs = new Path2D();
            crabLegs.moveTo(this.x + 40, this.y - 20);
            crabLegs.lineTo(this.x + 45, this.y - 10);
            crabLegs.lineTo(this.x + 40, this.y + 5);
            crabLegs.moveTo(this.x + 40, this.y - 20);
            crabLegs.lineTo(this.x + 30, this.y - 10);
            crabLegs.lineTo(this.x + 40, this.y);
            crabLegs.moveTo(this.x + 40, this.y - 20);
            crabLegs.lineTo(this.x + 50, this.y - 15);
            crabLegs.lineTo(this.x + 45, this.y + 5);
            crabLegs.moveTo(this.x + 40, this.y - 20);
            crabLegs.lineTo(this.x + 42, this.y - 18);
            crabLegs.lineTo(this.x + 34, this.y + 3);
            aquarium.crc.stroke(crabLegs);
            let crabEye = new Path2D();
            crabEye.arc(this.x + 47, this.y - 36, 3, 0, 2 * Math.PI);
            aquarium.crc.fillStyle = "black";
            aquarium.crc.strokeStyle = "black";
            aquarium.crc.fill(crabEye);
            aquarium.crc.stroke(crabEye);
            let crabfühl = new Path2D();
            crabfühl.moveTo(this.x + 60, this.y - 40);
            crabfühl.lineTo(this.x + 70, this.y - 50);
            crabfühl.lineTo(this.x + 75, this.y - 45);
            crabfühl.moveTo(this.x + 60, this.y - 40);
            crabfühl.lineTo(this.x + 65, this.y - 60);
            crabfühl.lineTo(this.x + 75, this.y - 40);
            aquarium.crc.fillStyle = this.color;
            aquarium.crc.strokeStyle = this.color;
            aquarium.crc.stroke(crabfühl);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x > (aquarium.crc.canvas.width + 15)) {
                this.x = -80;
            }
            if (this.x < (-82)) {
                this.x = (aquarium.crc.canvas.width + 15);
            }
        }
    }
    aquarium.Crab = Crab;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=crab.js.map