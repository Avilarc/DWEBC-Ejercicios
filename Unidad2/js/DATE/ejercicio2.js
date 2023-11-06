function getWeeklyDay(año,mes,dia) {
    let date = new Date(año, mes - 1, dia);
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let indiceDia = date.getDay();
  
    return diasSemana[indiceDia];
  }
  
  
  let año = 2023;
  let mes = 11;
  let dia = 4;
  
  
  let diaSemana =  getWeeklyDay(año, mes, dia);
  console.log(diaSemana);