function getMyBornDay(año,mes,dia) {
    let date = new Date(año, mes - 1, dia);
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let indiceDia = date.getDay();
  
    return diasSemana[indiceDia];
  }
  
  let año = 1996;
  let mes = 11;
  let dia = 24;
  
  let cumpleaños = getMyBornDay(año,mes,dia);
  console.log(cumpleaños);