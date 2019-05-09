"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Aufgabe: Aufgabe 7: Erster Node Server
Name: Felix Brunn
Matrikel: 260550
Datum: 02.05.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
const Http = require("http");
const Url = require("url");
console.log("Starting server");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);
function handleListen() {
    console.log("Listening");
}
function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let url = Url.parse(_request.url, true);
    for (let key in url.query) {
        _response.write("<span>" + key + ": " + url.query[key] + "</span><br>");
        console.log(key);
        console.log(url.query[key]);
    }
    console.log(_request.url);
    _response.end();
}
//# sourceMappingURL=Server.js.map