let calculadora = {
    constructor: function () {
      this.a = parseInt(prompt("Introduce el primer numero"));
      this.b = parseInt(prompt("Introduce el segundo numero"));
    },
  
    suma: function () {
      return this.a + this.b
    },
  
    multi: function () {
      return this.a * this.b;
    }
  };
  
  calculadora.constructor();
  
  console.log(calculadora.suma());
  console.log(calculadora.multi());