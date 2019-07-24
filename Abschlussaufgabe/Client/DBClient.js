/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var game;
(function (game) {
    function insert() {
        console.log(game.nameImput);
        let query = "command=insert";
        query += "&name=" + game.nameImput;
        query += "&score=" + game.score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    game.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    game.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", game.serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray = JSON.parse(xhr.response);
            for (let i = 0; i < allPlayersArray.length; i++) {
                allPlayersArray.sort(rankPlayers);
            }
            for (let i = 0; i < 10; i++) {
                let newPlayer = document.createElement("div");
                document.getElementById("scoreBoard").appendChild(newPlayer);
                newPlayer.innerHTML = `<div>${allPlayersArray[i].name} : ${allPlayersArray[i].score}</div>`;
            }
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function rankPlayers(_1, _2) {
        let score1 = _1.score;
        let score2 = _2.score;
        if (score1 < score2) {
            return 1;
        }
        if (score1 > score2) {
            return -1;
        }
        return 0;
    }
})(game || (game = {}));
//# sourceMappingURL=DBClient.js.map