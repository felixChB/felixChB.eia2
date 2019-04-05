let karo7 = {
    zahl: "7",
    symbol: "karo",
    img: ""
};
let herz7 = {
    zahl: "7",
    symbol: "herz",
    img: ""
};
let pik7 = {
    zahl: "7",
    symbol: "pik",
    img: ""
};
let kreuz7 = {
    zahl: "7",
    symbol: "kreuz",
    img: ""
};
let karo8 = {
    zahl: "8",
    symbol: "karo",
    img: ""
};
let herz8 = {
    zahl: "8",
    symbol: "herz",
    img: ""
};
let pik8 = {
    zahl: "8",
    symbol: "pik",
    img: ""
};
let kreuz8 = {
    zahl: "8",
    symbol: "kreuz",
    img: ""
};
let karo9 = {
    zahl: "9",
    symbol: "karo",
    img: ""
};
let herz9 = {
    zahl: "9",
    symbol: "herz",
    img: ""
};
let pik9 = {
    zahl: "9",
    symbol: "pik",
    img: ""
};
let kreuz9 = {
    zahl: "9",
    symbol: "kreuz",
    img: ""
};
let karo10 = {
    zahl: "10",
    symbol: "karo",
    img: ""
};
let herz10 = {
    zahl: "10",
    symbol: "herz",
    img: ""
};
let pik10 = {
    zahl: "10",
    symbol: "pik",
    img: ""
};
let kreuz10 = {
    zahl: "10",
    symbol: "kreuz",
    img: ""
};
let karoBube = {
    zahl: "Bube",
    symbol: "karo",
    img: ""
};
let herzBube = {
    zahl: "Bube",
    symbol: "herz",
    img: ""
};
let pikBube = {
    zahl: "Bube",
    symbol: "pik",
    img: ""
};
let kreuzBube = {
    zahl: "Bube",
    symbol: "kreuz",
    img: ""
};
let karoDame = {
    zahl: "Dame",
    symbol: "karo",
    img: ""
};
let herzDame = {
    zahl: "Dame",
    symbol: "herz",
    img: ""
};
let pikDame = {
    zahl: "Dame",
    symbol: "pik",
    img: ""
};
let kreuzDame = {
    zahl: "Dame",
    symbol: "kreuz",
    img: ""
};
let karoKoenig = {
    zahl: "Koenig",
    symbol: "karo",
    img: ""
};
let herzKoenig = {
    zahl: "Koenig",
    symbol: "herz",
    img: ""
};
let pikKoenig = {
    zahl: "Koenig",
    symbol: "pik",
    img: ""
};
let kreuzKoenig = {
    zahl: "Koenig",
    symbol: "kreuz",
    img: ""
};
let karoAss = {
    zahl: "Ass",
    symbol: "karo",
    img: ""
};
let herzAss = {
    zahl: "Ass",
    symbol: "herz",
    img: ""
};
let pikAss = {
    zahl: "Ass",
    symbol: "pik",
    img: ""
};
let kreuzAss = {
    zahl: "Ass",
    symbol: "kreuz",
    img: ""
};
let allCards = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel = [];
let yourHand = [];
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];
function playGame() {
    let anfangsHandkarten = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    ziehStapel = allCards;
    kartenZiehen(anfangsHandkarten);
    //Test
    console.log(anfangsHandkarten);
}
function kartenZiehen(anzahlKarten) {
    for (let i = 0; i < anzahlKarten; i++) {
        let randomCount = Math.floor(Math.random() * ziehStapel.length);
        yourHand.push(ziehStapel[randomCount]);
        ziehStapel.splice(randomCount, 1);
        //Test
        console.log(yourHand[i]);
    }
    //Test
    console.log(yourHand);
    console.log(ziehStapel);
}
//# sourceMappingURL=main.js.map