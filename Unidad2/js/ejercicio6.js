function contarDigitos(numero) {
    if (numero < 10) {
        return 1;
    } else {
        return 1 + contarDigitos(Math.floor(numero / 10));
    }
}
let entrada = prompt("Ingresa un número para calcular la cantidad de dígitos:");
let numero = parseInt(entrada);
if (isNaN(numero)) {
 console.log("Por favor, ingresa un número válido.");
} else {
    let cantidadDigitos = contarDigitos(numero);
    console.log(`La cantidad de dígitos en ${numero} es:  ${cantidadDigitos}`);
}