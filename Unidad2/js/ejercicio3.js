function calcularFactorial() {
    let entrada = prompt("Ingresa un número para calcular su factorial:");
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        function factorial(num) {
            if (num === 0) {
                return 1;
            } else {
                return num * factorial(num - 1);
            }
        }
        if (numero < 0) {
            console.log("El factorial no está definido para números negativos.");
        } else {
            let resultado = factorial(numero);
            console.log(`El factorial de ${numero} es: ${resultado}`);
        }
    }
}

calcularFactorial();