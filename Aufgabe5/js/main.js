/*
Aufgabe: Aufgabe 4: Icedealer
Name: Felix Brunn
Matrikel: 260550
Datum: 21.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var js_to_html;
(function (js_to_html) {
    window.addEventListener("load", init);
    function init(_event) {
        generateSite(js_to_html.data);
        /*
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            console.log(fieldset)
            fieldset.addEventListener("change", handleChange);
            document.getElementById("bp").addEventListener("click", bestellungPrüfen);
        }
        */
    }
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function generateSite(_data) {
        console.log("generateSite");
        for (let kategorie in _data) {
            console.log("mme");
            let value = _data[kategorie];
            document.getElementById("wahl").appendChild(fieldset);
            fieldset.appendChild(legend);
            for (let i = 0; i < value.length; i++)
                displaySite(value[i]);
            console.log("displaySite");
        }
    }
    function displaySite(_box) {
        legend.innerText = "eis";
        if (_box.type == "number") {
            let input = document.createElement("input");
            fieldset.appendChild(input);
            input.after(_box.name);
            input.setAttribute("name", _box.name);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("value", "0");
            input.setAttribute("step", "1");
            input.setAttribute("max", "4");
            input.setAttribute("min", "0");
        }
        else if (_box.type == "checkbox") {
            let input = document.createElement("input");
            let label = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _box.name;
            label.setAttribute("for", _box.name);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("name", _box.name);
        }
        else if (_box.type == "radio") {
            let input = document.createElement("input");
            let label = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _box.id;
            label.setAttribute("for", _box.id);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("name", _box.name);
        }
    }
    /*
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
            if ((allBoxes[i].name == "Schoko" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Vanille" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Himmelblau" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Mango" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Cookies" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Stracciatella" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Haselnuss" && Number(allBoxes[i].value) > 0) || (allBoxes[i].name == "Zitrone" && Number(allBoxes[i].value) > 0)) {
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
    */
    /*
    function bestellungPrüfen(): void {
        let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        console.log("bp");
        let missing: string = "";
        let eischecked: number = 0;
        let lochecked: number = 0;
        let adchecked: number = 0;
        for (let i: number = 0; i < 8; i++) {
            if (Number(allBoxes[i].value) > 0) {
                eischecked = 1;
                console.log(eischecked);
            }
        }
        if (eischecked == 0) {
            missing += "Sorte, ";
        }
        if (allBoxes[11].checked == false && allBoxes[12].checked == false) {
            missing += "Darreichungsform, ";
            console.log(allBoxes[5].checked);
            console.log(allBoxes[6].checked);
        }
        for (let i: number = 13; i < 16; i++) {
            if (allBoxes[i].checked == true) {
                lochecked = 1;
            }
        }
        if (lochecked == 0) {
            missing += "Lieferoption, ";
        }
        for (let i: number = 16; i < 20; i++) {
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
    */
})(js_to_html || (js_to_html = {}));
//# sourceMappingURL=main.js.map