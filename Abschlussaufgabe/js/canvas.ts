/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {
	document.addEventListener("DOMContentLoaded", init);
	export let serverAddress: string = "https://eia2-endgame.herokuapp.com/";
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	export let nameImput: string;
	export let score: number = 0;
	let allObj: GameObj[] = [];
	let fps: number = 30;
	let imageData: ImageData;
	let player: PlayChar;
	let timeout: number;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");

		drawBackground();

		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

		document.addEventListener("keydown", moving);
		document.addEventListener("keyup", deMoving);
		document.addEventListener("keydown", shoot);

		refresh();

		player = new PlayChar()

		for (let i: number = 0; i < 15; i++) {
			let fish: Fish = new Fish();
			allObj.push(fish);
			fish.draw();
			console.log("fish");
		}
		for (let i: number = 0; i < 2; i++) {
			let crab: Crab = new Crab();
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
		timeout = window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < allObj.length; i++) {
			allObj[i].update();
		}

		player.update();
		collide();
		/* destroy(); */
		/* if (score == 170) {
			nameImput = prompt("You win! " + "Dein Score: " + score, "Your Player-Name");
			gameOver();
		} */

		crc.fillStyle = "black";
		crc.font = "30px Righteous";
		crc.fillText("Score: " + score.toString(), 840, 40);
		crc.fillStyle = "red";
		crc.font = "30px Righteous";
		crc.fillText("Life: " + player.life.toString(), 25, 40);
	}

	function drawBackground(): void {

		let earth: Path2D = new Path2D();
		earth.rect(0, 0, canvas.width, canvas.height);
		crc.fillStyle = "brown";
		crc.strokeStyle = "#brown";
		crc.fill(earth);
		crc.stroke(earth);

		let fluss: Path2D = new Path2D();
		fluss.moveTo((-50), 300);
		fluss.bezierCurveTo(300, 220, 600, 450, 1050, 300);
		crc.lineWidth = 200;
		crc.strokeStyle = "blue";
		crc.stroke(fluss);
	}

	function moving(_e: KeyboardEvent): void {
		let pressedKey: number = _e.which;
		switch (pressedKey) {
			case 87:
				player.dy = -10;
				break;
			case 83:
				player.dy = 10;
				break;
			case 65:
				player.dx = -10;
				break;
			case 68:
				player.dx = 10;
				break;
		}
	}

	function deMoving(_e: KeyboardEvent): void {
		let pressedKey: number = _e.which;
		switch (pressedKey) {
			case 87:
				player.dy = 0;
				break;
			case 83:
				player.dy = 0;
				break;
			case 65:
				player.dx = 0;
				break;
			case 68:
				player.dx = 0;
				break;
		}
	}

	function shoot(_e: KeyboardEvent): void {
		let pressedKey: number = _e.which;
		if (pressedKey == 32) {
			console.log("shoot");
			let x: number = player.x;
			let y: number = player.y;
			let shot: BubbleShot = new BubbleShot();
			shot.x = x + 10;
			shot.y = y;
			allObj.push(shot);
		}
	}

	/* function destroy(): void {
		for (let i: number = 0; i < allObj.length; i++) {
			if (allObj[i] instanceof Fish) {
				let thisFish: Fish = allObj[i];
				for (let j: number = 0; j < allObj.length; i++) {
					if (allObj[j] instanceof BubbleShot) {
						let abstandX = thisFish.x - allObj[j].x;
						let abstandY = thisFish.y - allObj[j].y;
						let abstand: number = Math.sqrt(Math.pow(abstandX, 2) + Math.pow(abstandY, 2));
						let hitboxAbstand: number = abstand - thisFish.h - allObj[j].h;
						if (hitboxAbstand < 0) {
							allObj.splice(j, 1);
							score += 10;
							console.log("destroy");
						}
					}
				}
			}
		}
	} */

	function collide(): void {
		for (let i: number = 0; i < allObj.length; i++) {
			let o: GameObj = allObj[i];

			let abstandX = o.x - player.x;
			let abstandY = o.y - player.y;
			let abstand: number = Math.sqrt(Math.pow(abstandX, 2) + Math.pow(abstandY, 2));
			let hitboxAbstand: number = abstand - o.h - player.h;

			if (hitboxAbstand < 0) {
				if (o instanceof Crab) {
					player.life++;
					player.h += 5;
					score += 10;
					console.log(player.life);
					allObj.splice(i, 1);

					if (player.life <= 5) {
						let crab: Crab = new Crab();
						allObj.push(crab);
					}
				}
				if (o instanceof Fish) {
					player.life--;
					player.h -= 5;

					let exp: Path2D = new Path2D();
					exp.arc(allObj[i].x, allObj[i].y, 40, 0, 2 * Math.PI);
					crc.lineWidth = 2;
					crc.fillStyle = "black";
					crc.strokeStyle = "black";
					crc.fill(exp);
					crc.stroke(exp);
					let exp2: Path2D = new Path2D();
					exp2.arc(allObj[i].x, allObj[i].y, 30, 0, 2 * Math.PI);
					crc.lineWidth = 2;
					crc.fillStyle = "red";
					crc.strokeStyle = "red";
					crc.fill(exp2);
					crc.stroke(exp2);
					let exp3: Path2D = new Path2D();
					exp3.arc(allObj[i].x, allObj[i].y, 15, 0, 2 * Math.PI);
					crc.lineWidth = 2;
					crc.fillStyle = "yellow";
					crc.strokeStyle = "yellow";
					crc.fill(exp3);
					crc.stroke(exp3);

					allObj.splice(i, 1);
					score += 20;

					let fish: Fish = new Fish();
					allObj.push(fish);
					if (player.life == 0) {
						nameImput = prompt("Game Over!" + "Dein Score: " + score, "Your Player-Name");
						gameOver();
					}
				}
				/* if (player.h > o.h) {
					allObj.splice(i, 1);
					player.h += 4;
					score += 10;
				} else {
					nameImput = prompt("Game Over!" + "Dein Score: " + score, "Your Player-Name");
					gameOver();
				} */
			}
		}
	}

	function gameOver(): void {
		window.clearTimeout(timeout);
		insert();
		refresh();

		//location.reload();
	}

} 