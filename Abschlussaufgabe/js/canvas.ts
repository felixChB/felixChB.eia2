/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let allObj: GameObj[] = [];
	let fps: number = 30;
	let imageData: ImageData;
	let player: Player;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");

		drawBackground();

		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

		document.addEventListener("keydown", moving);

		player = new Player()

		for (let i: number = 0; i < 11; i++) {
			let fish: Fish = new Fish();
			allObj.push(fish);
			fish.draw();
			console.log("fish");
		}
		for (let i: number = 0; i < 6; i++) {
			let crab: Crab = new Crab();
			crab.color = "#f90a0c";
			allObj.push(crab);
			crab.draw();
			console.log("crab");
		}
		for (let i: number = 0; i < 50; i++) {
			let bubble: Bubble = new Bubble();
			allObj.push(bubble);
			bubble.draw();
			console.log("bubble");
		}

		update();

	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < allObj.length; i++) {
			allObj[i].update();
		}

		player.update();
		collide();
	}

	function drawBackground(): void {
		drawWater();
		drawGround();
		for (let i: number = 0; i < 6; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = canvas.height - 70;
			drawPlants(x, y);
		}
		for (let i: number = 0; i < 4; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = canvas.height - 60;
			drawStone(x, y);
		}
	}

	function drawWater(): void {
		let water: Path2D = new Path2D();
		water.rect(0, 0, canvas.width, canvas.height);
		crc.fillStyle = "#0965b1";
		crc.strokeStyle = "#0965b1";
		crc.fill(water);
		crc.stroke(water);
	}

	function drawGround(): void {
		let ground: Path2D = new Path2D();
		ground.rect(0, (canvas.height - 80), canvas.width, 80);
		crc.fillStyle = "#f0d998";
		crc.strokeStyle = "#f0d998";
		crc.fill(ground);
		crc.stroke(ground);
	}

	function drawPlants(_x: number, _y: number): void {
		crc.beginPath();
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x + 20, _y - 120);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x + 60, _y - 20, _x + 35, _y - 45, _x + 55, _y - 55);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 20, _y - 50, _x + 5, _y - 70, _x - 35, _y - 75);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 20, _y - 70, _x + 70, _y - 130, _x, _y - 170);

		crc.lineWidth = 8;
		crc.strokeStyle = "#087332";
		crc.stroke();
		crc.closePath();
	}
	function drawStone(_x: number, _y: number): void {
		crc.beginPath();
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x - 30, _y - 50);
		crc.bezierCurveTo(_x - 50, _y - 30, _x - 70, _y - 50, _x - 40, _y);
		crc.closePath();

		crc.lineWidth = 8;
		crc.strokeStyle = "#717171";
		crc.fillStyle = "#717171";
		crc.fill();
		crc.stroke();
	}

	function moving(_e: KeyboardEvent): void {
		let pressedKey: number = _e.which;
		switch (pressedKey) {
			case 87:
				console.log("up");
				player.move("up");
				break;
			case 83:
				console.log("down");
				player.move("down");
				break;
			case 65:
				console.log("left");
				player.move("left");
				break;
			case 68:
				console.log("right");
				player.move("right");
				break;
		}
	}

	function collide(): void {
		for (let i: number = 0; i < allObj.length; i++) {
			let o: GameObj = allObj[i];

			let abstandX = o.x - player.x;
			let abstandY = o.y - player.y;
			let abstand: number = Math.sqrt(Math.pow(abstandX, 2) + Math.pow(abstandY, 2));
			let hitboxAbstand: number = abstand - o.h - player.h;

			if (hitboxAbstand < 0) {
				allObj.splice(i, 1);
			}
		}
	}
}