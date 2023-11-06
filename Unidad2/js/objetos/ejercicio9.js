let frutas = {
    nombre: "Manzana",
    kg: 2,

    vender: function() {
        console.log(`Vendida ${this.nombre} con un peso de ${this.kg}kg`);
    },
    comprar: function() {
        console.log(`Comprada ${this.nombre} con un peso de ${this.kg}kg`);
    },
    fechaSinStock: function() {
        console.log(`La fecha de falta de stock para ${this.nombre} no está disponible.`);
    },
    fechaCompra: function() {
        console.log(`La fecha de compra para ${this.nombre} no está disponible.`);
    }
};

frutas.vender();
frutas.comprar();
frutas.fechaSinStock();
frutas.fechaCompra();
  