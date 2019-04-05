interface Karten{
    zahl:string;
    symbol:string;
    img:string;
}

let karo7: Karten = {
    zahl:"7",
    symbol:"karo",
    img:""
}
let herz7: Karten = {
    zahl:"7",
    symbol:"herz",
    img:""
}
let pik7: Karten = {
    zahl:"7",
    symbol:"pik",
    img:""
}
let kreuz7: Karten = {
    zahl:"7",
    symbol:"kreuz",
    img:""
}
let karo8: Karten = {
    zahl:"8",
    symbol:"karo",
    img:""
}
let herz8: Karten = {
    zahl:"8",
    symbol:"herz",
    img:""
}
let pik8: Karten = {
    zahl:"8",
    symbol:"pik",
    img:""
}
let kreuz8: Karten = {
    zahl:"8",
    symbol:"kreuz",
    img:""
}
let karo9: Karten = {
    zahl:"9",
    symbol:"karo",
    img:""
}
let herz9: Karten = {
    zahl:"9",
    symbol:"herz",
    img:""
}
let pik9: Karten = {
    zahl:"9",
    symbol:"pik",
    img:""
}
let kreuz9: Karten = {
    zahl:"9",
    symbol:"kreuz",
    img:""
}
let karo10: Karten = {
    zahl:"10",
    symbol:"karo",
    img:""
}
let herz10: Karten = {
    zahl:"10",
    symbol:"herz",
    img:""
}
let pik10: Karten = {
    zahl:"10",
    symbol:"pik",
    img:""
}
let kreuz10: Karten = {
    zahl:"10",
    symbol:"kreuz",
    img:""
}
let karoBube: Karten = {
    zahl:"Bube",
    symbol:"karo",
    img:""
}
let herzBube: Karten = {
    zahl:"Bube",
    symbol:"herz",
    img:""
}
let pikBube: Karten = {
    zahl:"Bube",
    symbol:"pik",
    img:""
}
let kreuzBube: Karten = {
    zahl:"Bube",
    symbol:"kreuz",
    img:""
}
let karoDame: Karten = {
    zahl:"Dame",
    symbol:"karo",
    img:""
}
let herzDame: Karten = {
    zahl:"Dame",
    symbol:"herz",
    img:""
}
let pikDame: Karten = {
    zahl:"Dame",
    symbol:"pik",
    img:""
}
let kreuzDame: Karten = {
    zahl:"Dame",
    symbol:"kreuz",
    img:""
}
let karoKoenig: Karten = {
    zahl:"Koenig",
    symbol:"karo",
    img:""
}
let herzKoenig: Karten = {
    zahl:"Koenig",
    symbol:"herz",
    img:""
}
let pikKoenig: Karten = {
    zahl:"Koenig",
    symbol:"pik",
    img:""
}
let kreuzKoenig: Karten = {
    zahl:"Koenig",
    symbol:"kreuz",
    img:""
}
let karoAss: Karten = {
    zahl:"Ass",
    symbol:"karo",
    img:""
}
let herzAss: Karten = {
    zahl:"Ass",
    symbol:"herz",
    img:""
}
let pikAss: Karten = {
    zahl:"Ass",
    symbol:"pik",
    img:""
}
let kreuzAss: Karten = {
    zahl:"Ass",
    symbol:"kreuz",
    img:""
}

let allCards:Karten[] = [karo7,karo8,karo9,karo10,karoBube,karoDame,karoKoenig,karoAss,herz7,herz8,herz9,herz10,herzBube,herzDame,herzKoenig,herzAss,pik7,pik8,pik9,pik10,pikBube,pikDame,pikKoenig,pikAss,kreuz7,kreuz8,kreuz9,kreuz10,kreuzBube,kreuzDame,kreuzKoenig,kreuzAss];
let ziehStapel:Karten[] = [];
let yourHand:Karten[] = [];
let player1Hand:Karten[] = [];
let player2Hand:Karten[] = [];
let player3Hand:Karten[] = [];

function playGame(): void{
    let anfangsHandkarten:number = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    ziehStapel = allCards;
    kartenZiehen(anfangsHandkarten);
    //Test
    console.log(anfangsHandkarten)
}
function kartenZiehen(anzahlKarten:number) :void{
    for(let i:number=0;i<anzahlKarten;i++){
        let randomCount:number = Math.floor(Math.random()*ziehStapel.length);
        yourHand.push(ziehStapel[randomCount])
        ziehStapel.splice(randomCount, 1)
        //Test
        console.log(yourHand[i])
    }
    //Test
    console.log(yourHand)
    console.log(ziehStapel)
}
