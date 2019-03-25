//Typescript

function inputName() {
    let userName: string = prompt("Bitte Namen eingeben", "Name");
    if (userName != null) {
        document.getElementById("you").innerHTML =
            "Jo " + userName + "! Was geht?";
        console.log("Jo " + userName + "! Was geht?")
    }
}