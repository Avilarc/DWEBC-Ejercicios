let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  }
  
  function getTotalKg(obj) {
    let totalFrutas = {};
  
    for (const key in obj) {
      let frutasNuevo = key.split(' ')[0];
      totalFrutas = (totalFrutas || 0) + obj[key]; 
    }
  
    return totalFrutas;
  }
  
  let nuevasFrutas = getTotalKg(frutas);
  console.log(nuevasFrutas);