import * as Http from "http"; //Http-Objekt wird erstellt, alle möglichen Imports von "http" werden zum Http-Objekt hinzugefügt

namespace L05_Server { //öffnet nampespace L05_Server
	console.log("Starting server"); //gibt auf der Konsole "Starting Server" aus(zum prüfen obs geklappt hat)
	let port: number = Number(process.env.PORT); //erstellt eine Variable vom Typ number und belegt sie mit dem Port des Servers
	if (!port) //prüft ob die Variable port keinen Inhalt hat
		port = 8100; //port wird zu 8100

	let server: Http.Server = Http.createServer(); //Variable server vom Typ Http.Server wird deklariert und it einem neu creaiertem Server belegt
	server.addListener("request", handleRequest); //auf server wird ein Eventlistener erstellt, welcher handleRequest aufruft, wenn etwas angefordert wird 
	server.addListener("listening", handleListen); //auf server wird ein Eventlistener erstellt, welcher handleListen aufruft, wenn "listening" passiert
	server.listen(port); // server hört auf port

	function handleListen(): void { //beginn der funktion handleListen mit Typ void und keinen Parametern
		console.log("Listening"); //gibt auf der Konsole "Listening" aus(zum prüfen ob die Funktion ausgeführt wurde)
	} //schließen der funktion handleListen

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //beginn der funktion handleRequest mit Typ void und den Parametern _request vom Typ Http.IncomingMessage und _response vom Typ Http.ServerResponse
		console.log("I hear voices!"); //gibt auf der Konsole "I hear voices!" aus(zum prüfen ob die Funktion ausgeführt wurde)

		_response.setHeader("content-type", "text/html; charset=utf-8"); //der header wird in _response geschrieben mit dem Inhalt: "content-type", "text/html; charset=utf-8"
		_response.setHeader("Access-Control-Allow-Origin", "*"); //der header wird in _response geschrieben mit dem Inhalt: "Access-Control-Allow-Origin", "*"

		_response.write(_request.url); //in response wird die Url durch den Inhalt von _request.url geschrieben

		_response.end(); //schließt _response ab
	} //schließt die funktion handleRequest
} //schließt nampespace L05_Server