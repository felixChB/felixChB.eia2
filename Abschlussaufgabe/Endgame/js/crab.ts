/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class Crab extends GameObj {

		constructor() {
			super();
			this.x = canvas.width + 50;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * 10 - 12;
			this.dy = 0;
			this.h = 15;
		}

		draw(): void {

			let herz: Path2D = new Path2D();
			herz.moveTo(this.x, this.y);
			herz.moveTo(this.x, this.y + 20);
			herz.lineTo(this.x + 15, this.y);
			herz.quadraticCurveTo(this.x + 7, this.y - 15, this.x, this.y);
			herz.quadraticCurveTo(this.x - 7, this.y - 15, this.x - 15, this.y);
			herz.lineTo(this.x, this.y + 20);
			crc.fillStyle = "red";
			crc.strokeStyle = "black";
			crc.fill(herz);
			crc.stroke(herz);

			let hitboxC: Path2D = new Path2D();
			hitboxC.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
			crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
			crc.stroke(hitboxC);
		}

		move(): void {
			super.move();
			if (this.x < (-82)) {
				this.x = crc.canvas.width + 50;
				this.y = Math.random() * canvas.height;
				this.dx = Math.random() * 10 - 12;
			}
		}
	}
}