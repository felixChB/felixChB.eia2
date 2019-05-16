/*
Aufgabe: Aufgabe 8: Erste Datenbank
Name: Felix Brunn
Matrikel: 260550
Datum: 16.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
//https://eia2-eisserver.herokuapp.com/

import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

Mongo.connect("mongodb+srv://LV100_Mafiaboss:obey@mongoeia2-5ultx.mongodb.net/test?retryWrites=true", mongoCallback);

function mongoCallback(db: any): void {
	
}

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

	let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
	for (let key in url.query) {
		_response.write("<span>"+ key + ": " + url.query[key] + "</span><br>");
		console.log(key);
		console.log(url.query[key]);
	}
	
	console.log(_request.url);

	_response.end();
}