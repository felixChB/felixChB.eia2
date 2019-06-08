/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    class Bubble {
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            aquarium.crc.lineWidth = 2;
            aquarium.crc.fillStyle = this.color;
            aquarium.crc.strokeStyle = this.color;
            aquarium.crc.fill(bubble);
            aquarium.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < -25) {
                this.y = 525;
            }
        }
    }
    aquarium.Bubble = Bubble;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bubble.js.map