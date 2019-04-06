/*
Aufgabe: Aufgabe 2: Mau Mau
Name: Felix Brunn
Matrikel: 260550
Datum: 06.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface Karten {
    zahl: string;
    symbol: string;
    img: string;
}

let karo7: Karten = {
    zahl: "7",
    symbol: "Karo",
    img: ""
}
let herz7: Karten = {
    zahl: "7",
    symbol: "Herz",
    img: ""
}
let pik7: Karten = {
    zahl: "7",
    symbol: "Pik",
    img: ""
}
let kreuz7: Karten = {
    zahl: "7",
    symbol: "Kreuz",
    img: ""
}
let karo8: Karten = {
    zahl: "8",
    symbol: "Karo",
    img: ""
}
let herz8: Karten = {
    zahl: "8",
    symbol: "Herz",
    img: ""
}
let pik8: Karten = {
    zahl: "8",
    symbol: "Pik",
    img: ""
}
let kreuz8: Karten = {
    zahl: "8",
    symbol: "Kreuz",
    img: ""
}
let karo9: Karten = {
    zahl: "9",
    symbol: "Karo",
    img: ""
}
let herz9: Karten = {
    zahl: "9",
    symbol: "Herz",
    img: ""
}
let pik9: Karten = {
    zahl: "9",
    symbol: "Pik",
    img: ""
}
let kreuz9: Karten = {
    zahl: "9",
    symbol: "Kreuz",
    img: ""
}
let karo10: Karten = {
    zahl: "10",
    symbol: "Karo",
    img: ""
}
let herz10: Karten = {
    zahl: "10",
    symbol: "Herz",
    img: ""
}
let pik10: Karten = {
    zahl: "10",
    symbol: "Pik",
    img: ""
}
let kreuz10: Karten = {
    zahl: "10",
    symbol: "Kreuz",
    img: ""
}
let karoBube: Karten = {
    zahl: "Bube",
    symbol: "Karo",
    img: ""
}
let herzBube: Karten = {
    zahl: "Bube",
    symbol: "Herz",
    img: ""
}
let pikBube: Karten = {
    zahl: "Bube",
    symbol: "Pik",
    img: ""
}
let kreuzBube: Karten = {
    zahl: "Bube",
    symbol: "Kreuz",
    img: ""
}
let karoDame: Karten = {
    zahl: "Dame",
    symbol: "Karo",
    img: ""
}
let herzDame: Karten = {
    zahl: "Dame",
    symbol: "Herz",
    img: ""
}
let pikDame: Karten = {
    zahl: "Dame",
    symbol: "Pik",
    img: ""
}
let kreuzDame: Karten = {
    zahl: "Dame",
    symbol: "Kreuz",
    img: ""
}
let karoKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Karo",
    img: ""
}
let herzKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Herz",
    img: ""
}
let pikKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Pik",
    img: ""
}
let kreuzKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Kreuz",
    img: ""
}
let karoAss: Karten = {
    zahl: "Ass",
    symbol: "Karo",
    img: ""
}
let herzAss: Karten = {
    zahl: "Ass",
    symbol: "Herz",
    img: ""
}
let pikAss: Karten = {
    zahl: "Ass",
    symbol: "Pik",
    img: ""
}
let kreuzAss: Karten = {
    zahl: "Ass",
    symbol: "Kreuz",
    img: ""
}

let allCards: Karten[] = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel: Karten[] = [];
let yourHand: Karten[] = [];
let player1Hand: Karten[] = [];
let player2Hand: Karten[] = [];
let player3Hand: Karten[] = [];
let ablagestapel: Karten;
let randomCount: number;

//Aufruf beim Laden der Seite
document.addEventListener('DOMContentLoaded', init);

function init(): void {
    playGame();
}

//ein neues Spiel starten
function playGame(): void {
    //Handkarten auf 0 setzen
    yourHand = [];
    //Ziehstapel auffüllen
    ziehStapel = allCards;

    document.getElementById("yourHand").innerHTML = "";
    let anfangsHandkarten: number = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    kartenZiehen(anfangsHandkarten);
    writeStapel();
    //Test
    console.log(anfangsHandkarten)
}

//zufällige Karte ziehen
function kartenZiehen(anzahlKarten: number): void {
    for (let i: number = 0; i < anzahlKarten; i++) {
        randomCount = Math.floor(Math.random() * ziehStapel.length);
        yourHand.push(ziehStapel[randomCount])
        ziehStapel.splice(randomCount, 1)
        //Test
        console.log(yourHand[i])
        writeHtml(yourHand[i]);
    }
    //Test
    console.log(yourHand)
    console.log(ziehStapel)
}

//Funktion zum Schreiben des HTML-Codes
function writeHtml(_handKarte: Karten): void {
    /*let card: string = `<div class="Handkarte"><span>${_handKarte.symbol}</span><span>${_handKarte.zahl}</span></div>`;
    let prodElement = document.createElement('div');
    prodElement.innerHTML = card;
    document.getElementById("yourHand").appendChild(prodElement);
    */
    //Handkarten als HTML
    if (_handKarte.symbol == "Karo" || _handKarte.symbol == "Herz") {
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte red"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    } else {
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte black"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    }
    document.getElementById("HKAnzahl").innerHTML = `<span id="HKAnzahl">Handkarten: ${yourHand.length}</span>`
}

//Ziehstapel und Ablagestapel als HTML
function writeStapel(): void {
    randomCount = Math.floor(Math.random() * ziehStapel.length);
    ablagestapel = ziehStapel[randomCount];
    ziehStapel.splice(randomCount, 1)

    document.getElementById("stapel").innerHTML = `<div id="stapel"><div class="Handkarte"><p>Ablagestapel:</p><p>${ablagestapel.symbol}</p><p>${ablagestapel.zahl}</p></div><div class="Handkarte"><p>Ziehstapel:</p><p>${ziehStapel.length}</p></div></div>`;
}