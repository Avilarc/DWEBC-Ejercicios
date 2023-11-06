function calcularSuma(numero) {
    if (numero === 1) {
        return 1;
    } else {
        return numero + calcularSuma(numero - 1);
    }
}
let entrada = prompt("Ingresa un número para calcular la suma desde 1 hasta ese número:");
let numero = parseInt(entrada);

if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número positivo válido.");
} else {
    let suma = calcularSuma(numero);
    console.log(`La suma desde 1 hasta ${numero} es: ${suma}`);
}