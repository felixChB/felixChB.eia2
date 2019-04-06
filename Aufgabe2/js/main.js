let karo7 = {
    zahl: "7",
    symbol: "Karo",
    img: ""
};
let herz7 = {
    zahl: "7",
    symbol: "Herz",
    img: ""
};
let pik7 = {
    zahl: "7",
    symbol: "Pik",
    img: ""
};
let kreuz7 = {
    zahl: "7",
    symbol: "Kreuz",
    img: ""
};
let karo8 = {
    zahl: "8",
    symbol: "Karo",
    img: ""
};
let herz8 = {
    zahl: "8",
    symbol: "Herz",
    img: ""
};
let pik8 = {
    zahl: "8",
    symbol: "Pik",
    img: ""
};
let kreuz8 = {
    zahl: "8",
    symbol: "Kreuz",
    img: ""
};
let karo9 = {
    zahl: "9",
    symbol: "Karo",
    img: ""
};
let herz9 = {
    zahl: "9",
    symbol: "Herz",
    img: ""
};
let pik9 = {
    zahl: "9",
    symbol: "Pik",
    img: ""
};
let kreuz9 = {
    zahl: "9",
    symbol: "Kreuz",
    img: ""
};
let karo10 = {
    zahl: "10",
    symbol: "Karo",
    img: ""
};
let herz10 = {
    zahl: "10",
    symbol: "Herz",
    img: ""
};
let pik10 = {
    zahl: "10",
    symbol: "Pik",
    img: ""
};
let kreuz10 = {
    zahl: "10",
    symbol: "Kreuz",
    img: ""
};
let karoBube = {
    zahl: "Bube",
    symbol: "Karo",
    img: ""
};
let herzBube = {
    zahl: "Bube",
    symbol: "Herz",
    img: ""
};
let pikBube = {
    zahl: "Bube",
    symbol: "Pik",
    img: ""
};
let kreuzBube = {
    zahl: "Bube",
    symbol: "Kreuz",
    img: ""
};
let karoDame = {
    zahl: "Dame",
    symbol: "Karo",
    img: ""
};
let herzDame = {
    zahl: "Dame",
    symbol: "Herz",
    img: ""
};
let pikDame = {
    zahl: "Dame",
    symbol: "Pik",
    img: ""
};
let kreuzDame = {
    zahl: "Dame",
    symbol: "Kreuz",
    img: ""
};
let karoKoenig = {
    zahl: "Koenig",
    symbol: "Karo",
    img: ""
};
let herzKoenig = {
    zahl: "Koenig",
    symbol: "Herz",
    img: ""
};
let pikKoenig = {
    zahl: "Koenig",
    symbol: "Pik",
    img: ""
};
let kreuzKoenig = {
    zahl: "Koenig",
    symbol: "Kreuz",
    img: ""
};
let karoAss = {
    zahl: "Ass",
    symbol: "Karo",
    img: ""
};
let herzAss = {
    zahl: "Ass",
    symbol: "Herz",
    img: ""
};
let pikAss = {
    zahl: "Ass",
    symbol: "Pik",
    img: ""
};
let kreuzAss = {
    zahl: "Ass",
    symbol: "Kreuz",
    img: ""
};
let allCards = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel = [];
let yourHand = [];
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];
let ablagestapel;
let randomCount;
//Aufruf beim Laden der Seite
document.addEventListener('DOMContentLoaded', init);
function init() {
    playGame();
}
//ein neues Spiel starten
function playGame() {
    //Handkarten auf 0 setzen
    yourHand = [];
    document.getElementById("yourHand").innerHTML = "";
    let anfangsHandkarten = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    //ziehStapel auffüllen
    ziehStapel = allCards;
    kartenZiehen(anfangsHandkarten);
    writeStapel();
    //Test
    console.log(anfangsHandkarten);
}
//zufällige Karte ziehen
function kartenZiehen(anzahlKarten) {
    for (let i = 0; i < anzahlKarten; i++) {
        randomCount = Math.floor(Math.random() * ziehStapel.length);
        yourHand.push(ziehStapel[randomCount]);
        ziehStapel.splice(randomCount, 1);
        //Test
        console.log(yourHand[i]);
        writeHtml(yourHand[i]);
    }
    //Test
    console.log(yourHand);
    console.log(ziehStapel);
}
//Funktion zum Schreiben des HTML-Codes
function writeHtml(_handKarte) {
    /*let card: string = `<div class="Handkarte"><span>${_handKarte.symbol}</span><span>${_handKarte.zahl}</span></div>`;
    let prodElement = document.createElement('div');
    prodElement.innerHTML = card;
    document.getElementById("yourHand").appendChild(prodElement);
    */
    //Handkarten als HTML
    if (_handKarte.symbol == "Karo" || _handKarte.symbol == "Herz") {
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte red"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    }
    else {
        document.getElementById("yourHand").innerHTML += `<div class="Handkarte black"><p>${_handKarte.symbol}</p><p>${_handKarte.zahl}</p></div>`;
    }
    document.getElementById("HKAnzahl").innerHTML = `<span id="HKAnzahl">Handkarten: ${yourHand.length}</span>`;
}
//Ziehstapel und Ablagestapel als HTML
function writeStapel() {
    randomCount = Math.floor(Math.random() * ziehStapel.length);
    ablagestapel = ziehStapel[randomCount];
    ziehStapel.splice(randomCount, 1);
    document.getElementById("stapel").innerHTML = `<div id="stapel"><div class="Handkarte"><p>Ablagestapel:</p><p>${ablagestapel.symbol}</p><p>${ablagestapel.zahl}</p></div><div class="Handkarte"><p>Ziehstapel:</p><p>${ziehStapel.length}</p></div></div>`;
}
//# sourceMappingURL=main.js.map