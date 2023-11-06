let myInfo = {
    nombre: "Antonio",
    apellidos: "Villegas Arcos",
    edad: 26,
    ocupacion: "Estudiante"
  }
  
  //Usando JSON
  
  let objetoJSON = JSON.stringify(myInfo);
  
  
  //Usando una función recursiva
  
  function objetoATexto(obj, ind = 0) {
    let textoFinal = "";
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        textoFinal += " ".repeat(ind) + `${key}:\n` + objetoATexto(obj[key], ind + 2);
      } else {
        textoFinal += " ".repeat(ind) + `${key}: ${obj[key]}\n`;
      }
    }
  
    return textoFinal;
  }
  
  let usandoFuncion = objetoATexto(myInfo);
  
  console.log(usandoFuncion);
  console.log(objetoJSON);