function getSecondsFromNewYear() {
    let ahora = new Date();
    let InicioAño = new Date(2024,0,1);
  
    let diferencia = InicioAño - ahora;
    let segundosHataFinal = Math.floor(diferencia / 1000);
  
    return segundosHataFinal;
  }
  
  let segundos = getSecondsFromNewYear();
  console.log(segundos);