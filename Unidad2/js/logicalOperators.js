let opcion = prompt("Who's there");

if (opcion == "Admin") {
    let contraseña = prompt("Password?");
    if (contraseña == "TheMaster") {
        alert("Welcome!")
    } else if (contraseña == "Esc" || contraseña == "") {
        alert("Canceled")
    } else {
        alert("Wrong Password");
    }

} else if (opcion == "Esc" || opcion == "") {
    alert("canceled");
} else {
    alert("I don't know you");
}