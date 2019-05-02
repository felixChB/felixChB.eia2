/*
Aufgabe: Aufgabe 6: Erster Node Server
Name: Felix Brunn
Matrikel: 260550
Datum: 02.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace js_to_html {
    export interface Boxen {
        type: string;
        name: string;
        id: string;
        preis: number;
    }

    export interface fieldsetboxes {
        [kategorie: string]: Boxen[];
    }

    export let data: fieldsetboxes = {
        "WaffeloderBecher": [
            { type: "radio", name: "WaffeloderBecher", id: "Waffel", preis: 0 },
            { type: "radio", name: "WaffeloderBecher", id: "Becher", preis: 0 }
        ],
        "Sorten": [
            { type: "number", name: "Schoko", id: "Schoko", preis: 1 },
            { type: "number", name: "Vanille", id: "Vanille", preis: 1 },
            { type: "number", name: "Zitrone", id: "Zitrone", preis: 1 },
            { type: "number", name: "Mango", id: "Mango", preis: 1 }
        ],
        "Extras": [
            { type: "checkbox", name: "Sahne", id: "Sahne", preis: 0.5 },
            { type: "checkbox", name: "Schoko-Streussel", id: "Schoko-Streussel", preis: 0.5 }
        ],
        "Lieferoption": [
            { type: "radio", name: "Lieferoption", id: "Standard-Versandt", preis: 1 },
            { type: "radio", name: "Lieferoption", id: "Express-Versandt", preis: 2 },
            { type: "radio", name: "Lieferoption", id: "Selbst abholen", preis: 0 }
        ]
    };
}