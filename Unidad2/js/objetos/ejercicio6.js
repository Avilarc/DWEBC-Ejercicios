let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  }
  
  function getTotalKg(obj) {
    let total = 0;
    
    for (const i of Object.values(obj)) {
      total += i;
    }
  
    return total;
  }
  
  let kgTotal = getTotalKg(frutas);
  console.log(kgTotal);
  
  