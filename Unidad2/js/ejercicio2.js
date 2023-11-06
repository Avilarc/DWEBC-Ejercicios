function dibujarDiamante() {
    let tamaño = parseInt(prompt("Ingrese el tamaño del diamante:"));
    if (isNaN(tamaño) || tamaño <= 0 || tamaño % 2 === 0) {
        console.log("Por favor, ingrese un número válido mayor que cero y que sea impar.");
    } else {
        for (let i = 1; i <= tamaño; i += 2) {
            let línea = " ".repeat((tamaño - i) / 2);
            if (i === 1) {
                línea += "*";
            } else {
                línea += "*" + " ".repeat(i - 2) + "*";
            }

            console.log(línea);
        }
        for (let i = tamaño - 2; i >= 1; i -= 2) {
            let línea = " ".repeat((tamaño - i) / 2);
            if (i === 1) {
                línea += "*";
            } else {
                línea += "*" + " ".repeat(i - 2) + "*";
            }
            console.log(línea);
        }
    }

    return false;
}
function dibujarTriangulo() {
    let tamaño = parseInt(prompt("Ingrese el tamaño del triángulo: ")); // Si introduces 3 de tamaño sale relleno, pero no pude solucionarlode otra forma
    if (isNaN(tamaño) || tamaño <= 0) {
        console.log("Por favor, ingrese un número válido mayor que cero.");
    } else {
        for (let i = 1; i <= tamaño; i++) {
            let línea = "";
            for (let j = 1; j <= i; j++) {
                if (i === tamaño || j === 1 || j === i) {
                    línea += "*";
                } else {
                    línea += " ";
                }
            }
            console.log(línea);
        }
    }
    return false;
}
function dibujarCuadrado() {
    let tamaño = parseInt(prompt("Ingrese el tamaño del cuadrado:"));
    if (isNaN(tamaño) || tamaño <= 0) {
        console.log("Por favor, ingrese un número válido mayor que cero.");
    } else {
        for (let i = 1; i <= tamaño; i++) {
            let línea = "";
            for (let j = 1; j <= tamaño; j++) {
                if (i === 1 || i === tamaño || j === 1 || j === tamaño) {
                    línea += "*";
                } else {
                    línea += " ";
                }
            }
            console.log(línea);
        }
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