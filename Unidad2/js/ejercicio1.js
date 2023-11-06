function dibujarDiamante() {
    let n = prompt("Introduzca el tamaño del diamante, preferiblemente un impar");
    if (n % 2 === 0) { //
        n++;
    }

    for (let i = 1; i <= n; i += 2) {
        const espacios = (n - i) / 2;
        const asteriscos = i;
        const linea = ' '.repeat(espacios) + '*'.repeat(asteriscos);
        console.log(linea);
    }
    for (let i = n - 2; i >= 1; i -= 2) {
        const espacios = (n - i) / 2;
        const asteriscos = i;
        const linea = ' '.repeat(espacios) + '*'.repeat(asteriscos);
        console.log(linea);
    }
    return false;
}

function dibujarTriangulo() {
    let n = prompt("Introduzca el tamaño del triangulo");
    let cadena = "";
    for (let i = 0; i < n; i++) {
        cadena += "*";
        console.log(cadena);
    }
    return false;
}

function dibujarCuadrado() {
    let n = prompt ("Introduzca el tamaño del cuadrado");
    let cadena = "";

    for (let i = 0; i < n; i++) {
        cadena += "*";
    }for (let j = 0; j < n; j++) {
        console.log(cadena);
    }
    return false;
}


let salida = true;
let opcion = prompt("Introduzca que quiere dibujar un triangulo, cuadrado, o diamante").toLowerCase();
while (salida) {
    switch (opcion) {
        case "triangulo":
            salida = dibujarTriangulo();
            break;
        case "cuadrado":
            salida = dibujarCuadrado();
            break;
        case "diamante":
            salida = dibujarDiamante();
            break;
        default:
            alert("Gracias por usar el programa");
        break;
    }
}
