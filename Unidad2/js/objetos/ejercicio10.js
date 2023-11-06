let piezasCoche = {
    motor: 10,
    neumaticos: 20,
    faros: 15,
    frenos: 12,
    espejos: 8
};
  
function sumarNumeroAPiezas(piezas, numero) {
    for (let pieza in piezas) {
      if (piezas.hasOwnProperty(pieza)) {
        piezas[pieza] += numero;
      }
    }
}

console.log("Cantidades iniciales de piezas de repuesto:");
console.log(piezasAuto);

sumarNumeroAPiezas(piezasAuto, 5);

console.log("Cantidades de piezas de repuesto después de sumar 5:");
console.log(piezasAuto);
  