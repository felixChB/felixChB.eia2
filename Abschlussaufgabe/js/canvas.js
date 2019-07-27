/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    document.addEventListener("DOMContentLoaded", init);
    game.serverAddress = "https://eia2-endgame.herokuapp.com/";
    game.score = 0;
    let allObj = [];
    let shots = [];
    let fps = 30;
    let imageData;
    let player;
    let timeout;
    function init() {
        alert(`Spielanleitung
Willkommen im Endgame. 
Du bist ein einzelnes Raumschiff, dass sich einer überzahl an Gegnern entgegenstellt. Bewege dich mit „w,a,s,d“, um den Gegnern auszuweichen und schieße dich mit „leertaste“ durch die unendlichen Massen. Du beginnst mit 3 Leben und erhältst für jedes eingesammelte Herz ein Neues dazu. Aber gib acht. Sammelst du mit 4 Leben ein weiteres Herz ein spawnt kein neues Herz und du musst dich mit 5 Leben zufriedengeben. Trifft dich ein Gegner verlierst du 1 Leben und 50 Punkte. Schaffst du es jedoch mit deinen Schüssen einen Gegner zu treffen explodiert dieser und beschert dir 50 Punkte. Fallen deine Leben auf 0 ist das Spiel vorbei und du kannst dich mit deinem Namen (natürlich musst du nicht deinen echten Namen nehmen) in die Spielerliste eintragen. Ist deine erreichte Punktzahl hoch genug wirst du deinen Namen im Scoreboard wiedersehen und gehörst nun zu den Top 10. Also los! Möge der höchste Score gewinnen!`);
        game.canvas = document.getElementsByTagName("canvas")[0];
        game.crc = game.canvas.getContext("2d");
        drawBackground();
        imageData = game.crc.getImageData(0, 0, game.canvas.width, game.canvas.height);
        document.addEventListener("keydown", moving);
        document.addEventListener("keyup", deMoving);
        document.addEventListener("keydown", shoot);
        game.refresh();
        player = new game.PlayChar();
        for (let i = 0; i < 30; i++) {
            let fish = new game.Fish();
            allObj.push(fish);
            fish.draw();
            console.log("fish");
        }
        let crab = new game.Crab();
        allObj.push(crab);
        crab.draw();
        console.log("crab");
        for (let i = 0; i < 50; i++) {
            let bubble = new game.Bubble();
            allObj.push(bubble);
            bubble.draw();
            console.log("bubble");
        }
        update();
    }
    /* function startGame(): void {

    } */
    function update() {
        timeout = window.setTimeout(update, 1000 / fps);
        game.crc.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < allObj.length; i++) {
            allObj[i].update();
        }
        for (let i = 0; i < shots.length; i++) {
            shots[i].update();
        }
        for (let i = 0; i < shots.length; i++) {
            if (shots[i].x > game.canvas.width) {
                shots.splice(i, 1);
                console.log("raus");
            }
        }
        player.update();
        collide();
        destroy();
        game.score++;
        game.crc.fillStyle = "black";
        game.crc.font = "30px Righteous";
        game.crc.fillText("Score: " + game.score.toString(), 820, 40);
        game.crc.fillStyle = "red";
        game.crc.font = "30px Righteous";
        game.crc.fillText("Life: " + player.life.toString(), 25, 40);
    }
    function drawBackground() {
        let earth = new Path2D();
        earth.rect(0, 0, game.canvas.width, game.canvas.height);
        game.crc.fillStyle = "brown";
        game.crc.strokeStyle = "brown";
        game.crc.fill(earth);
        game.crc.stroke(earth);
        let fluss = new Path2D();
        fluss.moveTo((-50), 300);
        fluss.bezierCurveTo(300, 220, 600, 450, 1050, 300);
        game.crc.lineWidth = 200;
        game.crc.strokeStyle = "blue";
        game.crc.stroke(fluss);
    }
    function moving(_e) {
        let pressedKey = _e.which;
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
    function deMoving(_e) {
        let pressedKey = _e.which;
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
    function shoot(_e) {
        let pressedKey = _e.which;
        if (pressedKey == 32) {
            console.log("shoot");
            let x = player.x;
            let y = player.y;
            let shot = new game.BubbleShot();
            shot.x = x + 10;
            shot.y = y;
            shots.push(shot);
        }
    }
    function destroy() {
        for (let i = 0; i < allObj.length; i++) {
            if (allObj[i] instanceof game.Fish) {
                let thisFish = allObj[i];
                for (let j = 0; j < shots.length; j++) {
                    console.log("shats");
                    let abstandX = thisFish.x - shots[j].x;
                    let abstandY = thisFish.y - shots[j].y;
                    let abstand = Math.sqrt(Math.pow(abstandX, 2) + Math.pow(abstandY, 2));
                    let hitboxAbstand = abstand - thisFish.h;
                    if (hitboxAbstand < 0) {
                        let exp = new Path2D();
                        exp.arc(allObj[i].x, allObj[i].y, 40, 0, 2 * Math.PI);
                        game.crc.lineWidth = 2;
                        game.crc.fillStyle = "black";
                        game.crc.strokeStyle = "black";
                        game.crc.fill(exp);
                        game.crc.stroke(exp);
                        let exp2 = new Path2D();
                        exp2.arc(allObj[i].x, allObj[i].y, 30, 0, 2 * Math.PI);
                        game.crc.lineWidth = 2;
                        game.crc.fillStyle = "red";
                        game.crc.strokeStyle = "red";
                        game.crc.fill(exp2);
                        game.crc.stroke(exp2);
                        let exp3 = new Path2D();
                        exp3.arc(allObj[i].x, allObj[i].y, 15, 0, 2 * Math.PI);
                        game.crc.lineWidth = 2;
                        game.crc.fillStyle = "yellow";
                        game.crc.strokeStyle = "yellow";
                        game.crc.fill(exp3);
                        game.crc.stroke(exp3);
                        allObj.splice(i, 1);
                        shots.splice(j, 1);
                        game.score += 50;
                        let fish = new game.Fish();
                        allObj.push(fish);
                        console.log("destroy");
                    }
                }
            }
        }
        /* for (let i: number = 0; i < allObj.length; i++) {
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
        } */
    }
    function collide() {
        for (let i = 0; i < allObj.length; i++) {
            let o = allObj[i];
            let abstandX = o.x - player.x;
            let abstandY = o.y - player.y;
            let abstand = Math.sqrt(Math.pow(abstandX, 2) + Math.pow(abstandY, 2));
            let hitboxAbstand = abstand - o.h - player.h;
            if (hitboxAbstand < 0) {
                if (o instanceof game.Crab) {
                    player.life++;
                    player.h += 5;
                    game.score += 20;
                    console.log(player.life);
                    allObj.splice(i, 1);
                    if (player.life <= 4) {
                        let crab = new game.Crab();
                        allObj.push(crab);
                    }
                }
                if (o instanceof game.Fish) {
                    player.life--;
                    player.h -= 5;
                    let exp = new Path2D();
                    exp.arc(allObj[i].x, allObj[i].y, 40, 0, 2 * Math.PI);
                    game.crc.lineWidth = 2;
                    game.crc.fillStyle = "black";
                    game.crc.strokeStyle = "black";
                    game.crc.fill(exp);
                    game.crc.stroke(exp);
                    let exp2 = new Path2D();
                    exp2.arc(allObj[i].x, allObj[i].y, 30, 0, 2 * Math.PI);
                    game.crc.lineWidth = 2;
                    game.crc.fillStyle = "red";
                    game.crc.strokeStyle = "red";
                    game.crc.fill(exp2);
                    game.crc.stroke(exp2);
                    let exp3 = new Path2D();
                    exp3.arc(allObj[i].x, allObj[i].y, 15, 0, 2 * Math.PI);
                    game.crc.lineWidth = 2;
                    game.crc.fillStyle = "yellow";
                    game.crc.strokeStyle = "yellow";
                    game.crc.fill(exp3);
                    game.crc.stroke(exp3);
                    allObj.splice(i, 1);
                    game.score -= 50;
                    let fish = new game.Fish();
                    allObj.push(fish);
                    if (player.life == 0) {
                        game.nameImput = prompt("Game Over! " + "Dein Score: " + game.score, "Your Player-Name");
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
    function gameOver() {
        window.clearTimeout(timeout);
        game.insert();
        game.refresh();
        //location.reload();
    }
})(game || (game = {}));
//# sourceMappingURL=canvas.js.map