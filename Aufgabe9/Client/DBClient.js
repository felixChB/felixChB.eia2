/*Aufgabe: Aufgabe 9: Serveranbindung Datenbank
Name: Felix Brunn
Matrikel: 260550
Datum: 23.05.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://eia2-eisserver.herokuapp.com/";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        document.getElementById("MaInsert").addEventListener("click", search);
    }
    function search(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=search";
        query += "&matrikel=" + inputs[3].value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
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
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map