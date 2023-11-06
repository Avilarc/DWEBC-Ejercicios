function multiplicaObjeto(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'number') { //Como hacer esta comparativa buscada en la documentación
        obj[key] *= 2;
      }
    }
  }
  
  let objetoEjemplo = {
    a: 10,
    b: 5,
    c: "Hola Mundo",
    d: 20,
    e: "Hola buenas tardes"
  
  }
  
  multiplicaObjeto(objetoEjemplo);
  
  console.log(objetoEjemplo);