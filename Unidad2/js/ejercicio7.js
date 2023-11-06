let entrada = prompt("Ingresa un número para mostrarlo en orden inverso:");
let numero = entrada.toString();

if (!isNaN(parseInt(numero))) {
    let numeroInverso = numero.split('').reverse().join('');
    console.log(`Número en orden inverso: ${numeroInverso}`);
} else {
    console.log("Por favor, ingresa un número válido.");
}