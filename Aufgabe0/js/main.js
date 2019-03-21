//Typescript
function inputName() {
    var userName = prompt("Bitte Namen eingeben", "Name");
    if (userName != null) {
        document.getElementById("you").innerHTML =
            "Jo " + userName + "! Was geht?";
        console.info("Jo " + userName + "! Was geht?");
    }
}
//# sourceMappingURL=main.js.map