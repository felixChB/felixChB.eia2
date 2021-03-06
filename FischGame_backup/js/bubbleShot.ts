/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class BubbleShot extends GameObj {
		r: number;

		constructor() {
			super();
			this.dx = 20;
			this.dy = 0;
			this.r = 10;
		}

		draw(): void {
			let bubble: Path2D = new Path2D();
			bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.lineWidth = 2;
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(bubble);
			crc.stroke(bubble);
		}

		move(): void {
			super.move();
		}
	}
}