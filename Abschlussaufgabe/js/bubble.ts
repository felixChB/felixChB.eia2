/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class Bubble extends GameObj {
		r: number;
		t: number;
		color: string;

		constructor() {
			super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height - 70;
			this.dx = 0;
			this.dy = Math.random() * (-5) - 2;
			this.r = (Math.random() * (15 - 5) + 5);
			this.t = Math.random();
			this.color = `rgba(167, 211, 223, ${this.t})`;
		}

		draw(): void {
			let bubble: Path2D = new Path2D();
			bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.lineWidth = 2;
			crc.fillStyle = this.color;
			crc.strokeStyle = this.color;
			crc.fill(bubble);
			crc.stroke(bubble);
		}

		move(): void {
			super.move();
			if (this.y < -25) {
				this.y = 525;
			}
		}
	}
}