/*Abschlussaufgabe: Canvas-Game
Name: Felix Brunn
Matrikel: 260550
Datum: 23.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace game {

    export function insert(): void {
        console.log(nameImput);
        let query: string = "command=insert";
        query += "&name=" + nameImput;
        query += "&score=" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {

            let allPlayersArray: Player[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < allPlayersArray.length; i++) {
                allPlayersArray.sort(rankPlayers);
            }

            for (let i: number = 0; i < 10; i++) {
                let newPlayer = document.createElement("div");
                document.getElementById("scoreBoard").appendChild(newPlayer);
                newPlayer.innerHTML = `<div>${allPlayersArray[i].name} : ${allPlayersArray[i].score}</div>`;
            }

            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }

    function rankPlayers(_1: Player, _2: Player): number {
        let score1: number = _1.score;
        let score2: number = _2.score;
        if (score1 < score2) {
            return 1;
        }
        if (score1 > score2) {
            return -1;
        }
        return 0;
    }
}