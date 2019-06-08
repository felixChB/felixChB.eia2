/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;
	let fishArray: Fish[] = [];
	let crabArray: Crab[] = [];
	let bubbleArray: Bubble[] = [];
	let fps: number = 30;
	let imageData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");

		drawBackground();

		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

		for (let i: number = 0; i < 11; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height - 100;
			let dx: number = Math.random() * 20;
			let dy: number = Math.random() * 20 - 10;
			let fish: Fish;
			fish = new Fish();
			fish.x = x;
			fish.y = y;
			fish.dx = dx;
			fish.dy = dy;
			fishArray.push(fish);
			fish.draw();
			console.log(fish);
		}
		for (let i: number = 0; i < 6; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height - 50;
			let dx: number = Math.random() * 10 - 8;
			let crab: Crab;
			crab = new Crab();
			crab.x = x;
			crab.y = y;
			crab.dx = dx;
			crab.color = "#f90a0c";
			crabArray.push(crab);
			crab.draw();
			console.log(crab);
		}
		for (let i: number = 0; i < 50; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height - 70;
			let dy: number = Math.random() * (-5) - 2;
			let r: number = (Math.random() * (15 - 5) + 5);
			let transparency: number = Math.random();
			let bubble: Bubble;
			bubble = new Bubble();
			bubble.x = x;
			bubble.y = y;
			bubble.dy = dy;
			bubble.r = r;
			bubble.t = transparency;
			bubble.color = `rgba(167, 211, 223, ${transparency})`;
			bubbleArray.push(bubble);
			bubble.draw();
			console.log(bubble);
		}

		update();

	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < fishArray.length; i++) {
			fishArray[i].update();
		}
		for (let i: number = 0; i < crabArray.length; i++) {
			crabArray[i].update();
		}
		for (let i: number = 0; i < bubbleArray.length; i++) {
			bubbleArray[i].update();
		}
	}

	function drawBackground(): void {
		drawWater();
		drawGround();
		for (let i: number = 0; i < 6; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = 430;
			drawPlants(x, y);
		}
		for (let i: number = 0; i < 4; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = 440;
			drawStone(x, y);
		}
	}

	function drawWater(): void {
		let water: Path2D = new Path2D();
		water.rect(0, 0, 1000, 500);
		crc.fillStyle = "#0965b1";
		crc.strokeStyle = "#0965b1";
		crc.fill(water);
		crc.stroke(water);
	}

	function drawGround(): void {
		let ground: Path2D = new Path2D();
		ground.rect(0, 420, 1000, 80);
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
}