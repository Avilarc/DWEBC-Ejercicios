function pow(n,m) {
    if (m == 0) {
      return 1;
    } else {
      return n * pow(n,m-1);
    }
}
  
  function division(n,m) {
    return n/m;
}
  
  function realizarOperacion(n1,n2,operacion) {
    return operacion(n1,n2);
}

console.log(realizarOperacion(2,3,division));