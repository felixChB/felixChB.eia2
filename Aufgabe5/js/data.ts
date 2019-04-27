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
}