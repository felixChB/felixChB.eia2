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
        "Sorten": [
            { type: "number", name: "Schoko", id: "Schokoeis", preis: 1 },
            { type: "number", name: "Vanille", id: "Vanilleeis", preis: 1 }
        ],
        "Extras": [
            { type: "checkbox", name: "Sahne", id: "Sahneextra", preis: 0.5 }
        ]
    };
}