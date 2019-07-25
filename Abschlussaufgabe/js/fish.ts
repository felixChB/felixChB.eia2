/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


//eigentlich ein raumschiff
namespace game {
	export class Fish extends GameObj {

		constructor() {
			super();
			this.x = canvas.width + 100;
			this.y = (Math.random() * (canvas.height - 50) + 50);
			this.dx = (Math.random() * 10) - 15;
			this.dy = Math.random() * 4 - 2;
			this.h = 25;
		}

		draw(): void {

			let guns: Path2D = new Path2D();
			guns.moveTo(this.x + 10, this.y + 25);
			guns.lineTo(this.x - 25, this.y + 25);
			guns.lineTo(this.x - 25, this.y + 15);
			guns.lineTo(this.x + 10, this.y + 15);
			guns.lineTo(this.x + 10, this.y + 25);
			guns.moveTo(this.x + 10, this.y - 25);
			guns.lineTo(this.x - 25, this.y - 25);
			guns.lineTo(this.x - 25, this.y - 15);
			guns.lineTo(this.x + 10, this.y - 15);
			guns.lineTo(this.x + 10, this.y - 25);
			crc.fillStyle = "darkred";
			crc.strokeStyle = "black";
			crc.fill(guns);
			crc.stroke(guns);

			let fire: Path2D = new Path2D();
			fire.moveTo(this.x, this.y);
			fire.moveTo(this.x + 10, this.y + 12);
			fire.lineTo(this.x + 55, this.y);
			fire.lineTo(this.x + 10, this.y - 12);
			crc.fillStyle = "lightblue";
			crc.strokeStyle = "black";
			crc.fill(fire);
			crc.stroke(fire);

			let fire2: Path2D = new Path2D();
			fire2.moveTo(this.x, this.y);
			fire2.moveTo(this.x + 10, this.y + 8);
			fire2.lineTo(this.x + 45, this.y);
			fire2.lineTo(this.x + 10, this.y - 8);
			crc.fillStyle = "cyan";
			crc.fill(fire2);

			let body: Path2D = new Path2D();
			body.moveTo(this.x, this.y);
			body.moveTo(this.x - 40, this.y);
			body.quadraticCurveTo(this.x - 10, this.y + 5, this.x + 10, this.y + 30);
			body.lineTo(this.x + 20, this.y + 30);
			body.lineTo(this.x + 20, this.y - 30);
			body.lineTo(this.x + 10, this.y - 30);
			body.quadraticCurveTo(this.x - 10, this.y - 5, this.x - 40, this.y);
			crc.fillStyle = "darkgrey";
			crc.strokeStyle = "black";
			crc.fill(body);
			crc.stroke(body);

			let window: Path2D = new Path2D();
			window.moveTo(this.x, this.y);
			window.moveTo(this.x + 5, this.y + 12);
			window.lineTo(this.x - 25, this.y);
			window.lineTo(this.x + 5, this.y - 12);
			window.lineTo(this.x + 5, this.y + 12);
			crc.fillStyle = "lightgrey";
			crc.strokeStyle = "black";
			crc.fill(window);
			crc.stroke(window);


			let hitboxF: Path2D = new Path2D();
			hitboxF.arc(this.x, this.y, this.h, 0, 2 * Math.PI);
			crc.strokeStyle = `rgb(255, 255, 255, 0.2)`;
			crc.stroke(hitboxF);
		}

		move(): void {
			super.move();

			if (this.x < (-100)) {
				this.x = canvas.width + 100;
				this.y = (Math.random() * (canvas.height - 50) + 50);
				this.dx = (Math.random() * 10) - 15;
				this.dy = Math.random() * 4 - 2;
			}
			if (this.y > (crc.canvas.height + 50)) {
				this.x = canvas.width + 100;
				this.y = (Math.random() * (canvas.height - 50) + 50);
				this.dx = (Math.random() * 10) - 15;
				this.dy = Math.random() * 4 - 2;
			}
			if (this.y < (-50)) {
				this.x = canvas.width + 100;
				this.y = (Math.random() * (canvas.height - 50) + 50);
				this.dx = (Math.random() * 10) - 15;
				this.dy = Math.random() * 4 - 2;
			}
		}
	}
}