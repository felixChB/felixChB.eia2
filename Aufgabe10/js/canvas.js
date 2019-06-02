var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        water();
        ground();
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * canvas.width;
            let y = 430;
            plants(x, y);
        }
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * canvas.width;
            let y = 440;
            stoned(x, y);
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 70;
            bubble(x, y);
        }
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            fish(x, y);
        }
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 50;
            crab(x, y);
        }
    }
    function water() {
        let water = new Path2D();
        water.rect(0, 0, 1000, 500);
        crc.fillStyle = "#3b42a3";
        crc.strokeStyle = "#3b42a3";
        crc.fill(water);
        crc.stroke(water);
    }
    function ground() {
        let ground = new Path2D();
        ground.rect(0, 420, 1000, 80);
        crc.fillStyle = "#f7ddbb";
        crc.strokeStyle = "#f7ddbb";
        crc.fill(ground);
        crc.stroke(ground);
    }
    function plants(_x, _y) {
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
        crc.strokeStyle = "#0dff0d";
        crc.stroke();
        crc.closePath();
    }
    function stoned(_x, _y) {
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
    function bubble(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y, (Math.random() * (30 - 5) + 5), 0, 2 * Math.PI);
        crc.lineWidth = 2;
        crc.fillStyle = "#b7e2fc";
        crc.strokeStyle = "white";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
    function fish(_x, _y) {
        let body = new Path2D();
        body.ellipse(_x, _y, 20, 40, 30, 0, 2 * Math.PI);
        crc.lineWidth = 1;
        crc.fillStyle = "#ffdb19";
        crc.strokeStyle = "black";
        crc.fill(body);
        crc.stroke(body);
        let flosse = new Path2D();
        crc.beginPath();
        flosse.moveTo(_x - 35, _y - 7);
        flosse.lineTo(_x - 80, _y - 30);
        flosse.lineTo(_x - 85, _y + 20);
        crc.closePath();
        crc.fillStyle = "black";
        crc.strokeStyle = "black";
        crc.fill(flosse);
        crc.stroke(flosse);
        let fishEye = new Path2D();
        fishEye.arc(_x + 28, _y, 5, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.strokeStyle = "black";
        crc.fill(fishEye);
        crc.stroke(fishEye);
        let fishPupille = new Path2D();
        fishPupille.arc(_x + 30, _y, 3, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.strokeStyle = "black";
        crc.fill(fishPupille);
        crc.stroke(fishPupille);
        let fishMouth = new Path2D();
        fishMouth.moveTo(_x + 38, _y + 12);
        fishMouth.lineTo(_x + 36, _y + 8);
        fishMouth.lineTo(_x + 34, _y + 12);
        fishMouth.lineTo(_x + 32, _y + 8);
        fishMouth.lineTo(_x + 30, _y + 12);
        fishMouth.lineTo(_x + 28, _y + 8);
        crc.stroke(fishMouth);
    }
    function crab(_x, _y) {
        let crabBody = new Path2D;
        crabBody.moveTo(_x, _y);
        crabBody.lineTo(_x + 20, _y - 20);
        crabBody.lineTo(_x + 40, _y - 30);
        crabBody.lineTo(_x + 45, _y - 35);
        crabBody.lineTo(_x + 60, _y - 40);
        crabBody.lineTo(_x + 58, _y - 35);
        crabBody.lineTo(_x + 50, _y - 30);
        crabBody.lineTo(_x + 40, _y - 18);
        crabBody.lineTo(_x + 25, _y - 10);
        crabBody.lineTo(_x, _y + 5);
        crabBody.lineTo(_x - 15, _y + 10);
        crabBody.lineTo(_x - 12.5, _y);
        crabBody.lineTo(_x - 15, _y - 10);
        crabBody.lineTo(_x, _y);
        crc.fillStyle = "#f90a0c";
        crc.strokeStyle = "#f90a0c";
        crc.fill(crabBody);
        crc.stroke(crabBody);
        let crabLegs = new Path2D();
        crabLegs.moveTo(_x + 40, _y - 20);
        crabLegs.lineTo(_x + 45, _y - 10);
        crabLegs.lineTo(_x + 40, _y + 5);
        crabLegs.moveTo(_x + 40, _y - 20);
        crabLegs.lineTo(_x + 30, _y - 10);
        crabLegs.lineTo(_x + 40, _y);
        crabLegs.moveTo(_x + 40, _y - 20);
        crabLegs.lineTo(_x + 50, _y - 15);
        crabLegs.lineTo(_x + 45, _y + 5);
        crabLegs.moveTo(_x + 40, _y - 20);
        crabLegs.lineTo(_x + 42, _y - 18);
        crabLegs.lineTo(_x + 34, _y + 3);
        crc.stroke(crabLegs);
        let crabEye = new Path2D();
        crabEye.arc(_x + 47, _y - 36, 3, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.strokeStyle = "black";
        crc.fill(crabEye);
        crc.stroke(crabEye);
        let crabfühl = new Path2D();
        crabfühl.moveTo(_x + 60, _y - 40);
        crabfühl.lineTo(_x + 70, _y - 50);
        crabfühl.lineTo(_x + 75, _y - 45);
        crabfühl.moveTo(_x + 60, _y - 40);
        crabfühl.lineTo(_x + 65, _y - 60);
        crabfühl.lineTo(_x + 75, _y - 40);
        crc.fillStyle = "#f90a0c";
        crc.strokeStyle = "#f90a0c";
        crc.stroke(crabfühl);
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=canvas.js.map