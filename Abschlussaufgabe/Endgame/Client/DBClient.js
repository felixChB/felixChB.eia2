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
            document.getElementById("scoreBoard").innerHTML = "";
            for (let i = 0; i < 10; i++) {
                let newPlayer = document.createElement("div");
                document.getElementById("scoreBoard").appendChild(newPlayer);
                newPlayer.setAttribute("id", i.toString());
                newPlayer.innerHTML = `${i + 1}.Place: ${allPlayersArray[i].name} : ${allPlayersArray[i].score}`;
            }
            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
    function rankPlayers(_1, _2) {
        if (_1.score < _2.score) {
            return 1;
        }
        if (_1.score > _2.score) {
            return -1;
        }
        return 0;
    }
})(game || (game = {}));
//# sourceMappingURL=DBClient.js.map