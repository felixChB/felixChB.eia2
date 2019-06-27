/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium {
	export class Fish {
		x: number;
		y: number;
		dx: number;
		dy: number;

		draw(): void {
			let body: Path2D = new Path2D();
			body.ellipse(this.x, this.y, 20, 40, 30, 0, 2 * Math.PI);
			crc.lineWidth = 1;
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(body);
			crc.stroke(body);

			let flosse: Path2D = new Path2D();
			crc.beginPath();
			flosse.moveTo(this.x - 35, this.y - 7);
			flosse.lineTo(this.x - 80, this.y - 30);
			flosse.lineTo(this.x - 85, this.y + 20);
			crc.closePath();
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(flosse);
			crc.stroke(flosse);

			let fishEye: Path2D = new Path2D();
			fishEye.arc(this.x + 28, this.y, 5, 0, 2 * Math.PI);
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(fishEye);
			crc.stroke(fishEye);

			let fishPupille: Path2D = new Path2D();
			fishPupille.arc(this.x + 30, this.y, 3, 0, 2 * Math.PI);
			crc.fillStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.strokeStyle = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
			crc.fill(fishPupille);
			crc.stroke(fishPupille);

			let fishMouth: Path2D = new Path2D();
			fishMouth.moveTo(this.x + 38, this.y + 12);
			fishMouth.lineTo(this.x + 36, this.y + 8);
			fishMouth.lineTo(this.x + 34, this.y + 12);
			fishMouth.lineTo(this.x + 32, this.y + 8);
			fishMouth.lineTo(this.x + 30, this.y + 12);
			fishMouth.lineTo(this.x + 28, this.y + 8);
			crc.stroke(fishMouth);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x += this.dx;
			this.y += this.dy;
			if (this.x > (crc.canvas.width + 80)) {
				this.x = -120;
			}
			if (this.y > (crc.canvas.height + 50)) {
				this.y = -50;
			}
			if (this.y < (-50)) {
				this.y = (crc.canvas.height + 50);
			}
		}
	}
}