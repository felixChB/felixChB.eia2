//Typescript
function inputName() {
    let userName = prompt("Bitte Namen eingeben", "Name");
    if (userName != null) {
        document.getElementById("you").innerHTML =
            "Jo " + userName + "! Was geht?";
        console.log("Jo " + userName + "! Was geht?");
    }
}
//# sourceMappingURL=main.js.map