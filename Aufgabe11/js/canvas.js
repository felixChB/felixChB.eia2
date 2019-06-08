/*Aufgabe: Aufgabe 11: Animationen und Klassen
Name: Felix Brunn
Matrikel: 260550
Datum: 08.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let crabArray = [];
    let bubbleArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        aquarium.crc = canvas.getContext("2d");
        drawBackground();
        imageData = aquarium.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 11; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            let dx = Math.random() * 20;
            let dy = Math.random() * 20 - 10;
            let fish;
            fish = new aquarium.Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw();
            console.log(fish);
        }
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 50;
            let dx = Math.random() * 10 - 8;
            let crab;
            crab = new aquarium.Crab();
            crab.x = x;
            crab.y = y;
            crab.dx = dx;
            crab.color = "#f90a0c";
            crabArray.push(crab);
            crab.draw();
            console.log(crab);
        }
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 70;
            let dy = Math.random() * (-5) - 2;
            let r = (Math.random() * (15 - 5) + 5);
            let transparency = Math.random();
            let bubble;
            bubble = new aquarium.Bubble();
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, canvas.width, canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < crabArray.length; i++) {
            crabArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
    }
    function drawBackground() {
        drawWater();
        drawGround();
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * canvas.width;
            let y = 430;
            drawPlants(x, y);
        }
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * canvas.width;
            let y = 440;
            drawStone(x, y);
        }
    }
    function drawWater() {
        let water = new Path2D();
        water.rect(0, 0, 1000, 500);
        aquarium.crc.fillStyle = "#0965b1";
        aquarium.crc.strokeStyle = "#0965b1";
        aquarium.crc.fill(water);
        aquarium.crc.stroke(water);
    }
    function drawGround() {
        let ground = new Path2D();
        ground.rect(0, 420, 1000, 80);
        aquarium.crc.fillStyle = "#f0d998";
        aquarium.crc.strokeStyle = "#f0d998";
        aquarium.crc.fill(ground);
        aquarium.crc.stroke(ground);
    }
    function drawPlants(_x, _y) {
        aquarium.crc.beginPath();
        aquarium.crc.moveTo(_x, _y);
        aquarium.crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x + 20, _y - 120);
        aquarium.crc.moveTo(_x, _y);
        aquarium.crc.bezierCurveTo(_x + 60, _y - 20, _x + 35, _y - 45, _x + 55, _y - 55);
        aquarium.crc.moveTo(_x, _y);
        aquarium.crc.bezierCurveTo(_x - 20, _y - 50, _x + 5, _y - 70, _x - 35, _y - 75);
        aquarium.crc.moveTo(_x, _y);
        aquarium.crc.bezierCurveTo(_x - 20, _y - 70, _x + 70, _y - 130, _x, _y - 170);
        aquarium.crc.lineWidth = 8;
        aquarium.crc.strokeStyle = "#087332";
        aquarium.crc.stroke();
        aquarium.crc.closePath();
    }
    function drawStone(_x, _y) {
        aquarium.crc.beginPath();
        aquarium.crc.moveTo(_x, _y);
        aquarium.crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x - 30, _y - 50);
        aquarium.crc.bezierCurveTo(_x - 50, _y - 30, _x - 70, _y - 50, _x - 40, _y);
        aquarium.crc.closePath();
        aquarium.crc.lineWidth = 8;
        aquarium.crc.strokeStyle = "#717171";
        aquarium.crc.fillStyle = "#717171";
        aquarium.crc.fill();
        aquarium.crc.stroke();
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=canvas.js.map