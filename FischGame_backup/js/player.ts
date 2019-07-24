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

		constructor() {
			this.x = canvas.width / 2;
			this.y = canvas.height / 2;
			this.dx = 0;
			this.dy = 0;
			this.h = 30;
		}

		draw(): void {

			let wings: Path2D = new Path2D();
			wings.moveTo(this.x + 5, this.y - 10);
			wings.lineTo(this.x - 7, this.y - 40);
			wings.lineTo(this.x - 20, this.y - 40);
			wings.lineTo(this.x - 15, this.y - 10);
			wings.lineTo(this.x, this.y - 10);

			wings.moveTo(this.x + 5, this.y + 10);
			wings.lineTo(this.x - 7, this.y + 40);
			wings.lineTo(this.x - 20, this.y + 40);
			wings.lineTo(this.x - 15, this.y + 10);
			wings.lineTo(this.x, this.y + 10);
			crc.fillStyle = "blue";
			crc.strokeStyle = "black";
			crc.fill(wings);
			crc.stroke(wings);

			let fire: Path2D=new Path2D();
			fire.moveTo(this.x,this.y);
			fire.moveTo(this.x-23,this.y+8);
			fire.lineTo(this.x-45,this.y);
			fire.lineTo(this.x-23,this.y-8);
			crc.fillStyle = "red";
			crc.strokeStyle = "black";
			crc.fill(fire);
			crc.stroke(fire);

			let body: Path2D = new Path2D();
			body.moveTo(this.x, this.y);
			body.moveTo(this.x + 30, this.y);
			body.lineTo(this.x, this.y - 15);
			body.lineTo(this.x - 10, this.y - 15);
			body.lineTo(this.x - 25, this.y - 10);
			body.lineTo(this.x - 25, this.y + 10);
			body.lineTo(this.x - 10, this.y + 15);
			body.lineTo(this.x, this.y + 15);
			body.lineTo(this.x + 30, this.y);
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
			crc.strokeStyle = "white";
			crc.stroke(hitboxP);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x += this.dx;
			this.y += this.dy;

			if (this.x >= canvas.width) {
				this.x = canvas.width;
			} else if (this.x <= 0) {
				this.x = 0;
			} else if (this.y >= canvas.height) {
				this.y = canvas.height;
			} else if (this.y <= 0) {
				this.y = 0;
			}
		}
	}
}