/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	export class PlayChar {
		x: number;
		y: number;
		dx: number;
		dy: number;
		h: number;
		life: number;

		constructor() {
			this.x = canvas.width / 2;
			this.y = canvas.height / 2;
			this.dx = 0;
			this.dy = 0;
			this.h = 20;
			this.life = 3;
		}

		draw(): void {

			let wings: Path2D = new Path2D();
			wings.moveTo(this.x + 5 + (this.h / 5), this.y - 10 - (this.h / 5));
			wings.lineTo(this.x - 7 - (this.h / 5), this.y - 40 - (this.h / 5));
			wings.lineTo(this.x - 20 - (this.h / 5), this.y - 40 - (this.h / 5));
			wings.lineTo(this.x - 15 - (this.h / 5), this.y - 10 - (this.h / 5));
			wings.lineTo(this.x, this.y - 10 - (this.h / 5));

			wings.moveTo(this.x + 5 + (this.h / 5), this.y + 10 + (this.h / 5));
			wings.lineTo(this.x - 7 - (this.h / 5), this.y + 40 + (this.h / 5));
			wings.lineTo(this.x - 20 - (this.h / 5), this.y + 40 + (this.h / 5));
			wings.lineTo(this.x - 15 - (this.h / 5), this.y + 10 + (this.h / 5));
			wings.lineTo(this.x, this.y + 10 + (this.h / 5));
			crc.fillStyle = "blue";
			crc.strokeStyle = "black";
			crc.fill(wings);
			crc.stroke(wings);

			let fire: Path2D = new Path2D();
			fire.moveTo(this.x, this.y);
			fire.moveTo(this.x - 23 - (this.h / 5), this.y + 8 + (this.h / 5));
			fire.lineTo(this.x - 45 - (this.h / 5), this.y);
			fire.lineTo(this.x - 23 - (this.h / 5), this.y - 8 - (this.h / 5));
			crc.fillStyle = "red";
			crc.strokeStyle = "black";
			crc.fill(fire);
			crc.stroke(fire);

			let fire2: Path2D = new Path2D();
			fire2.moveTo(this.x, this.y);
			fire2.moveTo(this.x - 23 - (this.h / 5), this.y + 4 + (this.h / 5));
			fire2.lineTo(this.x - 38 - (this.h / 5), this.y);
			fire2.lineTo(this.x - 23 - (this.h / 5), this.y - 4 - (this.h / 5));
			crc.fillStyle = "orange";
			crc.fill(fire2);

			let body: Path2D = new Path2D();
			body.moveTo(this.x, this.y);
			body.moveTo(this.x + 30 + (this.h / 5), this.y);
			body.lineTo(this.x, this.y - 15 - (this.h / 5));
			body.lineTo(this.x - 10 - (this.h / 5), this.y - 15 - (this.h / 5));
			body.lineTo(this.x - 25 - (this.h / 5), this.y - 10 - (this.h / 5));
			body.lineTo(this.x - 25 - (this.h / 5), this.y + 10 + (this.h / 5));
			body.lineTo(this.x - 10 - (this.h / 5), this.y + 15 + (this.h / 5));
			body.lineTo(this.x, this.y + 15 + (this.h / 5));
			body.lineTo(this.x + 30 + (this.h / 5), this.y);
			crc.fillStyle = "grey";
			crc.strokeStyle = "black";
			crc.fill(body);
			crc.stroke(body);

			let window: Path2D = new Path2D();
			window.moveTo(this.x, this.y);
			window.moveTo(this.x + 8, this.y + 5);
			window.lineTo(this.x + 8, this.y + 7);
			window.lineTo(this.x - 3, this.y + 10);
			window.lineTo(this.x - 5, this.y + 10);
			window.lineTo(this.x - 5, this.y - 10);
			window.lineTo(this.x - 3, this.y - 10);
			window.lineTo(this.x + 8, this.y + -7);
			window.lineTo(this.x + 8, this.y + 5);
			crc.fillStyle = "lightgrey";
			crc.strokeStyle = "black";
			crc.fill(window);
			crc.stroke(window);

			let hitboxP: Path2D = new Path2D();
			hitboxP.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
			crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
			crc.stroke(hitboxP);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x += this.dx;
			this.y += this.dy;

			if (this.x >= canvas.width - this.h) {
				this.x = canvas.width - this.h;
			} else if (this.x <= 0 + this.h) {
				this.x = 0 + this.h;
			}
			 if (this.y >= canvas.height - this.h) {
				this.y = canvas.height - this.h;
			} else if (this.y <= 0 + this.h) {
				this.y = 0 + this.h;
			}
		}
	}
}