function getLastDayMonth(año,mes) {
    let fecha = new Date(año,mes-1,0);
  
    return fecha.getDate();
  }
  
  let año = 2023;
  let mes = 11;
  
  let ultimoDiaMes = getLastDayMonth(año,mes);
  
  console.log(ultimoDiaMes);