/*
Aufgabe: Aufgabe 4: Icedealer
Name: Felix Brunn
Matrikel: 260550
Datum: 18.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
document.getElementById("bp").addEventListener("click", bestellungPrüfen);

function init(_event: Event): void {
    console.log("Init");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        console.log(fieldset)
        fieldset.addEventListener("change", handleChange);
    }
}

function handleChange(_event: Event): void {
    let sum: number = 0;
    let price: number = 0;
    let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    document.getElementById("eis").innerHTML = "Sorten: ";
    document.getElementById("ex").innerHTML = "Extras: ";
    document.getElementById("wob").innerHTML = "";
    document.getElementById("lo").innerHTML = "";
    document.getElementById("price").innerHTML = "Bestellzusammenfassung:   ";
    for (let i: number = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].checked == true) {
            price = Number(allBoxes[i].value);
            sum += price;
            console.log(sum);
            if (allBoxes[i].name == "Checkbox1" || allBoxes[i].name == "Checkbox2" || allBoxes[i].name == "Checkbox3") {
                let ziel = document.createElement("li");
                ziel.innerHTML = `${allBoxes[i].id}, `;
                document.getElementById("ex").appendChild(ziel);
            } else if (allBoxes[i].name == "Radiogroup1") {
                let ziel =document.createElement("li");
                        ziel.innerHTML=`${allBoxes[i].id}`;
                        document.getElementById("wob").appendChild(ziel);
            } else if (allBoxes[i].name == "Radiogroup2") {
                let ziel =document.createElement("li");
                        ziel.innerHTML=`${allBoxes[i].id}`;
                        document.getElementById("lo").appendChild(ziel);
            }
        }
        if (allBoxes[i].name == "Schoko" || allBoxes[i].name == "Vanille" || allBoxes[i].name == "Himmelblau" || allBoxes[i].name == "Mango" || allBoxes[i].name == "Cookies" && Number(allBoxes[i].value) > 0) {
            price = Number(allBoxes[i].value);
            sum += price;
            console.log(sum);
            let ziel = document.createElement("li");
            ziel.innerHTML = `${allBoxes[i].value} Kugeln ${allBoxes[i].name}, `;
            document.getElementById("eis").appendChild(ziel);
        }
        document.getElementById("price").innerHTML = `Bestellzusammenfassung:   ${sum} €`;
    }

}

function bestellungPrüfen(): void {
    console.log("bp");
}