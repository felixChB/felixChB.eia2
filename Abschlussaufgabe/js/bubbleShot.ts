/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class BubbleShot extends GameObj {
		h: number;

		constructor() {
			super();
			this.dx = 20;
			this.dy = 0;
			this.h = this.x + 10;
		}

		draw(): void {

			let shot: Path2D = new Path2D();
			shot.moveTo(this.x, this.y);
			shot.moveTo(this.x + 10, this.y);
			shot.lineTo(this.x + 7, this.y - 5);
			shot.lineTo(this.x - 7, this.y - 5);
			shot.lineTo(this.x - 10, this.y);
			shot.lineTo(this.x - 7, this.y + 5);
			shot.lineTo(this.x + 7, this.y + 5);
			shot.lineTo(this.x + 10, this.y);
			crc.fillStyle = "rgb(255, 209, 26)";
			crc.strokeStyle = "black";
			crc.fill(shot);
			crc.stroke(shot);

			/* let bubble: Path2D = new Path2D();
			bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.lineWidth = 2;
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(bubble);
			crc.stroke(bubble); */
		}

		move(): void {
			super.move();
		}
	}
}