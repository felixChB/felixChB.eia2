/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    document.addEventListener("DOMContentLoaded", init);
    let allObj = [];
    let fps = 30;
    let imageData;
    let player;
    function init() {
        game.canvas = document.getElementsByTagName("canvas")[0];
        game.crc = game.canvas.getContext("2d");
        drawBackground();
        imageData = game.crc.getImageData(0, 0, game.canvas.width, game.canvas.height);
        document.addEventListener("keydown", moving);
        player = new game.Player();
        for (let i = 0; i < 11; i++) {
            let fish = new game.Fish();
            allObj.push(fish);
            fish.draw();
            console.log("fish");
        }
        for (let i = 0; i < 6; i++) {
            let crab = new game.Crab();
            crab.color = "#f90a0c";
            allObj.push(crab);
            crab.draw();
            console.log("crab");
        }
        for (let i = 0; i < 50; i++) {
            let bubble = new game.Bubble();
            allObj.push(bubble);
            bubble.draw();
            console.log("bubble");
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        game.crc.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < allObj.length; i++) {
            allObj[i].update();
        }
        player.update();
    }
    function drawBackground() {
        drawWater();
        drawGround();
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * game.canvas.width;
            let y = game.canvas.height - 70;
            drawPlants(x, y);
        }
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * game.canvas.width;
            let y = game.canvas.height - 60;
            drawStone(x, y);
        }
    }
    function drawWater() {
        let water = new Path2D();
        water.rect(0, 0, game.canvas.width, game.canvas.height);
        game.crc.fillStyle = "#0965b1";
        game.crc.strokeStyle = "#0965b1";
        game.crc.fill(water);
        game.crc.stroke(water);
    }
    function drawGround() {
        let ground = new Path2D();
        ground.rect(0, (game.canvas.height - 80), game.canvas.width, 80);
        game.crc.fillStyle = "#f0d998";
        game.crc.strokeStyle = "#f0d998";
        game.crc.fill(ground);
        game.crc.stroke(ground);
    }
    function drawPlants(_x, _y) {
        game.crc.beginPath();
        game.crc.moveTo(_x, _y);
        game.crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x + 20, _y - 120);
        game.crc.moveTo(_x, _y);
        game.crc.bezierCurveTo(_x + 60, _y - 20, _x + 35, _y - 45, _x + 55, _y - 55);
        game.crc.moveTo(_x, _y);
        game.crc.bezierCurveTo(_x - 20, _y - 50, _x + 5, _y - 70, _x - 35, _y - 75);
        game.crc.moveTo(_x, _y);
        game.crc.bezierCurveTo(_x - 20, _y - 70, _x + 70, _y - 130, _x, _y - 170);
        game.crc.lineWidth = 8;
        game.crc.strokeStyle = "#087332";
        game.crc.stroke();
        game.crc.closePath();
    }
    function drawStone(_x, _y) {
        game.crc.beginPath();
        game.crc.moveTo(_x, _y);
        game.crc.bezierCurveTo(_x + 50, _y - 40, _x - 10, _y - 60, _x - 30, _y - 50);
        game.crc.bezierCurveTo(_x - 50, _y - 30, _x - 70, _y - 50, _x - 40, _y);
        game.crc.closePath();
        game.crc.lineWidth = 8;
        game.crc.strokeStyle = "#717171";
        game.crc.fillStyle = "#717171";
        game.crc.fill();
        game.crc.stroke();
    }
    function moving(_e) {
        let pressedKey = _e.which;
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
})(game || (game = {}));
//# sourceMappingURL=canvas.js.map