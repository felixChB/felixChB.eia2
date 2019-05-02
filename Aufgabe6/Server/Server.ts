/*
Aufgabe: Aufgabe 6: Erster Node Server
Name: Felix Brunn
Matrikel: 260550
Datum: 02.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
import * as Http from "http";

console.log("Starting server");
let port: number = Number(process.env.PORT);
if (!port)
	port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);

function handleListen(): void {
	console.log("Listening");
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
	console.log("I hear voices!");

	_response.setHeader("content-type", "text/html; charset=utf-8");
	_response.setHeader("Access-Control-Allow-Origin", "*");

	_response.write(_request.url); //was sich in der URL hinter dem / steht wird in den Browser geschrieben
	console.log(_request.url);

	_response.end();
}