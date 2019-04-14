/*
Aufgabe: Aufgabe 2: Mau Mau
Name: Felix Brunn
Matrikel: 260550
Datum: 14.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface Karten {
    zahl: string;
    symbol: string;
    num: number;
}

let karo7: Karten = {
    zahl: "7",
    symbol: "Karo",
    num: 1
}
let herz7: Karten = {
    zahl: "7",
    symbol: "Herz",
    num: 2
}
let pik7: Karten = {
    zahl: "7",
    symbol: "Pik",
    num: 3
}
let kreuz7: Karten = {
    zahl: "7",
    symbol: "Kreuz",
    num: 4
}
let karo8: Karten = {
    zahl: "8",
    symbol: "Karo",
    num: 5
}
let herz8: Karten = {
    zahl: "8",
    symbol: "Herz",
    num: 6
}
let pik8: Karten = {
    zahl: "8",
    symbol: "Pik",
    num: 7
}
let kreuz8: Karten = {
    zahl: "8",
    symbol: "Kreuz",
    num: 8
}
let karo9: Karten = {
    zahl: "9",
    symbol: "Karo",
    num: 9
}
let herz9: Karten = {
    zahl: "9",
    symbol: "Herz",
    num: 10
}
let pik9: Karten = {
    zahl: "9",
    symbol: "Pik",
    num: 11
}
let kreuz9: Karten = {
    zahl: "9",
    symbol: "Kreuz",
    num: 12
}
let karo10: Karten = {
    zahl: "10",
    symbol: "Karo",
    num: 13
}
let herz10: Karten = {
    zahl: "10",
    symbol: "Herz",
    num: 14
}
let pik10: Karten = {
    zahl: "10",
    symbol: "Pik",
    num: 15
}
let kreuz10: Karten = {
    zahl: "10",
    symbol: "Kreuz",
    num: 16
}
let karoBube: Karten = {
    zahl: "Bube",
    symbol: "Karo",
    num: 17
}
let herzBube: Karten = {
    zahl: "Bube",
    symbol: "Herz",
    num: 18
}
let pikBube: Karten = {
    zahl: "Bube",
    symbol: "Pik",
    num: 19
}
let kreuzBube: Karten = {
    zahl: "Bube",
    symbol: "Kreuz",
    num: 20
}
let karoDame: Karten = {
    zahl: "Dame",
    symbol: "Karo",
    num: 21
}
let herzDame: Karten = {
    zahl: "Dame",
    symbol: "Herz",
    num: 22
}
let pikDame: Karten = {
    zahl: "Dame",
    symbol: "Pik",
    num: 23
}
let kreuzDame: Karten = {
    zahl: "Dame",
    symbol: "Kreuz",
    num: 24
}
let karoKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Karo",
    num: 25
}
let herzKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Herz",
    num: 26
}
let pikKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Pik",
    num: 27
}
let kreuzKoenig: Karten = {
    zahl: "Koenig",
    symbol: "Kreuz",
    num: 28
}
let karoAss: Karten = {
    zahl: "Ass",
    symbol: "Karo",
    num: 29
}
let herzAss: Karten = {
    zahl: "Ass",
    symbol: "Herz",
    num: 30
}
let pikAss: Karten = {
    zahl: "Ass",
    symbol: "Pik",
    num: 31
}
let kreuzAss: Karten = {
    zahl: "Ass",
    symbol: "Kreuz",
    num: 32
}

let allCards: Karten[] = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel: Karten[] = [];
let yourHand: Karten[] = [];
let ablagestapel: Karten;
let abgelegteKarten: Karten[] = [];

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
    ziehStapel = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];

    document.getElementById("yourHand").innerHTML = "";
    let anfangsHandkarten: number = parseInt(prompt("Anzahl der Handkarten eingeben", "zwischen 2 und 8"), 10);
    if (isNaN(anfangsHandkarten) == true || anfangsHandkarten < 2 || anfangsHandkarten > 8) {
        playGame()
    }
    else {
        kartenAusteilen(anfangsHandkarten);
        let randomCount: number = Math.floor(Math.random() * ziehStapel.length);
        ablagestapel = ziehStapel[randomCount];
        ziehStapel.splice(randomCount, 1)
        writeStapel();
    }

    //Eventlistener:
    document.getElementById("ziehstapel").addEventListener("click", karteZiehen);
    document.getElementById("sort").addEventListener("click", handSortieren);
    document.getElementById("yourHand").addEventListener("click", karteAblegen)
    window.addEventListener("keydown", leertastePruefen);

    //Test
    console.log(anfangsHandkarten)
}

//zufällige Karte ziehen
function kartenAusteilen(anzahlKarten: number): void {
    for (let i: number = 0; i < anzahlKarten; i++) {
        let randomCount: number = Math.floor(Math.random() * ziehStapel.length);
        yourHand.push(ziehStapel[randomCount])
        ziehStapel.splice(randomCount, 1)
        writeHtml(yourHand[i]);
        //Test
        console.log("Handkarten")
        console.log(yourHand)
        console.log("Ziehstapel")
        console.log(ziehStapel)
        console.log(ziehStapel.length)
    }
}

function karteZiehen(): void {
    if (ziehStapel.length > 0) {
        let randomCount: number = Math.floor(Math.random() * ziehStapel.length);
        yourHand.push(ziehStapel[randomCount]);
        ziehStapel.splice(randomCount, 1);
        writeHtml(yourHand[yourHand.length - 1])
        writeStapel();
        //Test
        console.log('random Number: ' + randomCount);
        console.log("Handkarten")
        console.log(yourHand)
        console.log("Ziehstapel")
        console.log(ziehStapel)
        console.log(ziehStapel.length)
    } else {
        alert("Ziehstapel ist leer!");
    }
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
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte red" id="${_handKarte.num}"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    } else {
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte black" id="${_handKarte.num}"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    }
    if (yourHand.length == 0){
        document.getElementById("HKAnzahl").innerHTML = `<span id="HKAnzahl">Handkarten: 0</span>`;
    } else {
        document.getElementById("HKAnzahl").innerHTML = `<span id="HKAnzahl">Handkarten: ${yourHand.length}</span>`;
    }
}

//Ziehstapel und Ablagestapel als HTML
function writeStapel(): void {
    document.getElementById("stapel").innerHTML = "";
    document.getElementById("stapel").innerHTML = `<div id="stapel"><div class="Handkarte"><p>Ablagestapel:</p><p>${ablagestapel.symbol}</p><p>${ablagestapel.zahl}</p></div><div class="Handkarte" id="ziehstapel"><p>Ziehstapel:</p><p>${ziehStapel.length}</p></div></div>`;
    //Test
    console.log("Ziehstapel")
    console.log(ziehStapel)
}

function karteAblegen(event: Event): void {
    console.log("Karte ausspielen");
    console.log(event.target);
    document.getElementById("yourHand").innerHTML = "";
    let targetCard: HTMLElement = <HTMLElement>event.target;
    console.log(targetCard);
    for (let i: number = 0; i < yourHand.length; i++) {
        if (yourHand[i].num == parseInt(targetCard.getAttribute("id"), 10)) {
            abgelegteKarten.push(ablagestapel);
            ablagestapel = yourHand[i];
            yourHand.splice(i, 1);
            console.log(yourHand.length);
            console.log(ablagestapel);
            writeStapel();
        }
    }
    for (let i: number = 0; i < yourHand.length; i++) {
        writeHtml(yourHand[i]);
    }
}


function handSortieren(): void {
    document.getElementById("yourHand").innerHTML = "";
    yourHand.sort(function sortieren(_a: Karten, _b: Karten) {
        return _a.num - _b.num;
    });
    for (let i: number = 0; i < yourHand.length; i++) {
        writeHtml(yourHand[i]);
    }
}

function leertastePruefen(event: KeyboardEvent): void {
    if (event.keyCode == 32) {
        karteZiehen();
    }
}