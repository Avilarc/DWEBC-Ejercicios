let persona = {
    bolsillo: 0,
    listaTareas: [],
    cobraSueldo(dinero) {
        this.bolsillo = dinero;
    },
    anyadeTarea(...tareas) {
        if (this.listaTareas.length == 0) {
            this.listaTareas = []; 
        }
        this.listaTareas.push(...tareas);
    },
    quitarTarea(tarea) {
        for (let i = 0; i < this.listaTareas.length; i++) {
            if (tarea == this.listaTareas[i]) {
                this.listaTareas.splice(i, 1);
            }
        }
    }
};





let informatico = {};
let ordenanza = {};

Object.setPrototypeOf(informatico, persona);
Object.setPrototypeOf(ordenanza, persona);

informatico.cobraSueldo(2000);
informatico.anyadeTarea("Programar", "Crear una maquina Virtual", "Testear la BBDD");


ordenanza.cobraSueldo(1500);
ordenanza.anyadeTarea("Hacer Inventario", "Ordenar los armarios", "Mirar al cielo");

console.log(informatico.listaTareas);
informatico.quitarTarea("Crear una maquina Virtual");
console.log(informatico.listaTareas);
