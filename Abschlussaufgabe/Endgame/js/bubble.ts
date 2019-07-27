/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

//sind eigentlich wolken
namespace game {
	export class Bubble extends GameObj {
		r: number;
		t: number;
		color: string;

		constructor() {
			super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * (-20) - 15;
			this.dy = 0;
			this.r = (Math.random() * (80 - 5) + 45);
			this.t = Math.random() * 0.8;
			this.color = `rgb(153, 153, 153, ${this.t})`;
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
			if (this.x < -100) {
				this.x = canvas.width + 100;
				this.y = Math.random() * canvas.height;
				this.dx = Math.random() * (-20) - 15;
			}
		}
	}
}