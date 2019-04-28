/*
Aufgabe: Aufgabe 5: Icedealer
Name: Felix Brunn
Matrikel: 260550
Datum: 28.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var js_to_html;
(function (js_to_html) {
    js_to_html.data = {
        "wob": [
            { type: "radio", name: "wob", id: "Waffel", preis: 0 },
            { type: "radio", name: "wob", id: "Becher", preis: 0 }
        ],
        "Sorten": [
            { type: "number", name: "Schoko", id: "Schoko", preis: 1 },
            { type: "number", name: "Vanille", id: "Vanille", preis: 1 },
            { type: "number", name: "Zitrone", id: "Zitrone", preis: 1 },
            { type: "number", name: "Mango", id: "Mango", preis: 1 }
        ],
        "Extras": [
            { type: "checkbox", name: "Sahne", id: "Sahne", preis: 0.5 },
            { type: "checkbox", name: "Schoko-Streußel", id: "Schoko-Streußel", preis: 0.5 }
        ],
        "Lieferoption": [
            { type: "radio", name: "lo", id: "Standard-Versandt", preis: 1 },
            { type: "radio", name: "lo", id: "Express-Versandt", preis: 2 },
            { type: "radio", name: "lo", id: "Selbst abholen", preis: 0 }
        ]
    };
})(js_to_html || (js_to_html = {}));
//# sourceMappingURL=data.js.map