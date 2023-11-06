let sueldos = {
    Antonio: 1500,
    Jose: 2000,
    Maria: 1600
  }
  
  function sumaSalario(obj) {
    let sum = 0;
    for (const empleado in obj) {
      sum += obj[empleado];
    }
  
    return sum;
  }
  
  let sum = sumaSalario(sueldos);
  
  console.log("La suma total de todos los sueldos son: ", sum);