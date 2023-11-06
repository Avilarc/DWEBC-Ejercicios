function getSecondsFromNewYear() {
    let ahora = new Date();
    let InicioAño = new Date(2023,11,31,23,59,59);
  
    let diferencia = InicioAño - ahora;
    let segundosHataFinal = Math.floor(diferencia / 1000);
  
    return segundosHataFinal;
  }
  
  let segundos = getSecondsFromNewYear();
  console.log(segundos);