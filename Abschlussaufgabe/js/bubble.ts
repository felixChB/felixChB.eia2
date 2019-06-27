/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium {
	export class Bubble {
		x: number;
		y: number;
		dy: number;
		r: number;
		t: number;
		color: string;

		draw(): void {
			let bubble: Path2D = new Path2D();
			bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.lineWidth = 2;
			crc.fillStyle = this.color;
			crc.strokeStyle = this.color;
			crc.fill(bubble);
			crc.stroke(bubble);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.y += this.dy;
			if (this.y < -25) {
				this.y = crc.canvas.height + 25;
			}
		}
	}
}