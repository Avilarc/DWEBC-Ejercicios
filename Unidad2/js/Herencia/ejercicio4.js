let Vehiculo = {
    tipo: 'generic',
    numeroRuedas: 0,
    tipoIngenieria: 'generic',
    acelerar() {
      console.log(`El ${this.tipo} está acelerando.`);
    },
    frenar() {
      console.log(`El ${this.tipo} está frenando.`);
    },
    parar() {
      console.log(`El ${this.tipo} ha parado.`);
    },
    velocidad: 0,
    dueño: '',
    compraVehiculo(nuevoDueño) {
      this.dueño = nuevoDueño;
    },
    pruebaVelocidad() {
      console.log(`La velocidad punta del vehículo es: ${this.velocidad}`);
    },
};

let Moto = {};
let Coche = {};

Object.setPrototypeOf(Moto, Vehiculo);
Object.setPrototypeOf(Coche, Vehiculo);

Moto.tipo = "Trail";
Moto.numeroRuedas = 2;
Moto.tipoIngenieria = "1000 cc";
Moto.velocidad = 210;
Moto.compraVehiculo("Juanito");

Coche.tipo = "Deportivo";
Coche.numeroRuedas = 4;
Coche.tipoIngenieria = "650 caballos";
Coche.velocidad = 330;
Coche.compraVehiculo("Alfredo");

console.log("Moto:");
console.log(Moto.tipo);
console.log(Moto.numeroRuedas);
console.log(Moto.tipoIngenieria);
console.log(Moto.velocidad);
console.log(Moto.dueño);
console.log("-------------------------");
console.log("Coche:");
console.log(Coche.tipo);
console.log(Coche.numeroRuedas);
console.log(Coche.tipoIngenieria);
console.log(Coche.velocidad);
console.log(Coche.dueño);
console.log("--------------------------");
console.log("Pruebas de otras funciones");
Moto.pruebaVelocidad();
Coche.pruebaVelocidad();

Coche.acelerar();
Coche.frenar();
Coche.parar();
Moto.parar();
Moto.acelerar();
Moto.frenar();
