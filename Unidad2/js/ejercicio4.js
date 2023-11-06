function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
function calcularProbabilidadesLoteria(n, r) {
    if (n < 0 || r < 0 || r > n) {
        return 0;
    }
    let numerador = factorial(n);
    let denominador = factorial(r) * factorial(n - r);
    return numerador / denominador;
}

let n = parseInt(prompt("Ingresa el número total de números posibles n):"));
let r = parseInt(prompt("Ingresa el número de números elegidos (r):"));
let probabilidades = calcularProbabilidadesLoteria(n, r);
console.log(`Las probabilidades de ganar en la lotería son de 1 entre ${probabilidades.toFixed(0)}`);