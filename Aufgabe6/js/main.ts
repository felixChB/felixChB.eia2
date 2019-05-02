/*
Aufgabe: Aufgabe 6: Erster Node Server
Name: Felix Brunn
Matrikel: 260550
Datum: 02.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace js_to_html {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        generateSite(data);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            console.log(fieldset)
            fieldset.addEventListener("change", handleChange);
            document.getElementById("bp").addEventListener("click", bestellungPrüfen);
        }


    }

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    function generateSite(_data: fieldsetboxes): void {
        console.log("generateSite");
        for (let kategorie in _data) {
            console.log("mme")
            let value: Boxen[] = _data[kategorie];
            document.getElementById("wahl").appendChild(fieldset);
            fieldset.appendChild(legend);
            legend.innerText = "Auswahl";
            let div: HTMLDivElement = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = kategorie;

            for (let i: number = 0; i < value.length; i++)
                displaySite(value[i]);
            console.log("displaySite")
        }
    }

    function displaySite(_box: Boxen): void {
        if (_box.type == "number") {
            let input: HTMLInputElement = document.createElement("input");
            fieldset.appendChild(input);
            input.after(_box.name);
            input.setAttribute("name", _box.name);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("value", "0");
            input.setAttribute("step", "1");
            input.setAttribute("max", "4");
            input.setAttribute("min", "0");
            input.setAttribute("price", _box.preis.toString());

        } else if (_box.type == "checkbox") {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _box.name;
            label.setAttribute("for", _box.name);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("name", _box.name);
            input.setAttribute("price", _box.preis.toString());
        } else if (_box.type == "radio") {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _box.id;
            label.setAttribute("for", _box.id);
            input.setAttribute("type", _box.type);
            input.setAttribute("id", _box.id);
            input.setAttribute("name", _box.name);
            input.setAttribute("price", _box.preis.toString());
        }
    }





    function handleChange(_event: Event): void {
        let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let sum: number = 0;
        document.getElementById("eis").innerHTML = "Sorten: ";
        document.getElementById("ex").innerHTML = "Extras: ";
        document.getElementById("wob").innerHTML = "";
        document.getElementById("lo").innerHTML = "";
        document.getElementById("price").innerHTML = "Bestellzusammenfassung:   ";
        for (let i: number = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].checked == true) {
                sum += Number(allBoxes[i].getAttribute("price"));
                console.log(sum);
                if (allBoxes[i].type == "checkbox") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}, `;
                    document.getElementById("ex").appendChild(ziel);
                } else if (allBoxes[i].name == "wob") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("wob").appendChild(ziel);
                } else if (allBoxes[i].name == "lo") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("lo").appendChild(ziel);
                }
            }
            if (allBoxes[i].type == "number" && Number(allBoxes[i].value) > 0) {
                sum += (Number(allBoxes[i].getAttribute("price")) * Number(allBoxes[i].value));
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
        let wobchecked: number = 0;

        for (let i: number = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].type == "text")
                if (allBoxes[i].value == "") {
                    adchecked++;
                }
            if (allBoxes[i].type == "number") {
                if (Number(allBoxes[i].value) > 0) {
                    eischecked = 1;
                }
            }
            if (allBoxes[i].name == "wob") {
                if (allBoxes[i].checked == true) {
                    wobchecked = 1;
                }
            }
            if (allBoxes[i].name == "lo") {
                if (allBoxes[i].checked == true) {
                    lochecked = 1;
                }
            }
        }
        if (wobchecked == 0) {
            missing += "Darreichungsform, ";
        }
        if (eischecked == 0) {
            missing += "Sorte, ";
        }
        if (lochecked == 0) {
            missing += "Lieferoption, ";
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

}