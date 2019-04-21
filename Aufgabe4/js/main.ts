/*
Aufgabe: Aufgabe 4: Icedealer
Name: Felix Brunn
Matrikel: 260550
Datum: 18.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);

function init(_event: Event): void {
    console.log("Init");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        console.log(fieldset)
        fieldset.addEventListener("change", handleChange);
        document.getElementById("bp").addEventListener("click", bestellungPrüfen);
    }
}

function handleChange(_event: Event): void {
    let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let sum: number = 0;
    let price: number = 0;
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
                let ziel = document.createElement("li");
                ziel.innerHTML = `${allBoxes[i].id}`;
                document.getElementById("wob").appendChild(ziel);
            } else if (allBoxes[i].name == "Radiogroup2") {
                let ziel = document.createElement("li");
                ziel.innerHTML = `${allBoxes[i].id}`;
                document.getElementById("lo").appendChild(ziel);
            }
        }
        if ((allBoxes[i].name == "Schoko" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Vanille" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Himmelblau" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Mango" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Cookies" && Number(allBoxes[i].value) > 0)) {
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
    let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log("bp");
    let missing: string = "";
    let eischecked: number = 0;
    let lochecked: number = 0;
    let adchecked: number = 0;
    for (let i: number = 0; i < 5; i++) {
        if (Number(allBoxes[i].value) > 0) {
            eischecked = 1;
            console.log(eischecked);
        }
    }
    if (eischecked == 0) {
        missing += "Sorte, ";
    }
    if (allBoxes[8].checked == false && allBoxes[9].checked == false) {
        missing += "Darreichungsform, ";
        console.log(allBoxes[5].checked);
        console.log(allBoxes[6].checked);
    }
    for (let i: number = 10; i < 13; i++) {
        if (allBoxes[i].checked == true) {
            lochecked = 1;
        }
    }
    if (lochecked == 0) {
        missing += "Lieferoption, ";
    }
    for (let i: number = 13; i < 17; i++) {
        if (allBoxes[i].value == "") {
            adchecked++;
        }
    }
    if (adchecked > 0) {
        missing += "Adressdaten, ";
    }
    if (missing == "") {
        alert("Danke für Ihre Bestellung!")
    } else {
        alert("Bitte noch folgendes angeben: " + missing);
    }
}