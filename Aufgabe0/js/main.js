//Typescript
function InputName() {
    let userName = prompt("Bitte Namen eingeben", "Name");
    if (userName != null) {
        document.getElementById("you").innerHTML =
            "Jo " + userName + "! Was geht?";
        console.log("Jo " + userName + "! Was geht?");
    }
}
document.addEventListener('DOMContentLoaded', init);
function init() {
    InputName();
}
//# sourceMappingURL=main.js.map