/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class Crab extends GameObj {
		color: string;

		constructor() {
			super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height - 50;
			this.dx = Math.random() * 10 - 8;
			this.dy = 0;
		}

		draw(): void {
			let crabBody: Path2D = new Path2D;
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
			crc.fillStyle = this.color;
			crc.strokeStyle = this.color;
			crc.fill(crabBody);
			crc.stroke(crabBody);

			let crabLegs: Path2D = new Path2D();
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
			crc.stroke(crabLegs);

			let crabEye: Path2D = new Path2D();
			crabEye.arc(this.x + 47, this.y - 36, 3, 0, 2 * Math.PI);
			crc.fillStyle = "black";
			crc.strokeStyle = "black";
			crc.fill(crabEye);
			crc.stroke(crabEye);

			let crabfühl: Path2D = new Path2D();
			crabfühl.moveTo(this.x + 60, this.y - 40);
			crabfühl.lineTo(this.x + 70, this.y - 50);
			crabfühl.lineTo(this.x + 75, this.y - 45);
			crabfühl.moveTo(this.x + 60, this.y - 40);
			crabfühl.lineTo(this.x + 65, this.y - 60);
			crabfühl.lineTo(this.x + 75, this.y - 40);
			crc.fillStyle = this.color;
			crc.strokeStyle = this.color;
			crc.stroke(crabfühl);
		}

		move(): void {
			super.move();
			if (this.x > (crc.canvas.width + 15)) {
				this.x = -80;
			}
			if (this.x < (-82)) {
				this.x = (crc.canvas.width + 15);
			}
		}
	}
}