/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class Player {
		x: number;
		y: number;
		dx: number;
		dy: number;
		h: number;

		constructor() {
			this.x = canvas.width / 2;
			this.y = canvas.height / 2;
			this.dx = 0;
			this.dy = 0;
			this.h = 30;
		}

		draw(): void {
			let body: Path2D = new Path2D();
			body.ellipse(this.x, this.y, 20, 40, 30, 0, 2 * Math.PI);
			crc.lineWidth = 1;
			crc.fillStyle = `rgba(${(255)}, ${(255)}, ${(255)})`;
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

			let hitboxP: Path2D = new Path2D();
			hitboxP.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
			crc.strokeStyle = "white";
			crc.stroke(hitboxP);
		}

		update(): void {
			this.move("zero");
			this.draw();
		}

		move(_case: string): void {
			switch (_case) {
				case "up": {
					this.dy = -10;
					break;
				}
				case "down": {
					this.dy = 10;
					break;
				}
				case "left": {
					this.dx = -10;
					break;
				}
				case "right": {
					this.dx = 10;
					break;
				}
				case "zero": {
					this.dx = 0;
					this.dy = 0;
				}
			}

			this.x += this.dx;
			this.y += this.dy;
		}
	}
}