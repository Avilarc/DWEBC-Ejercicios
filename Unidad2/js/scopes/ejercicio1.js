function pow(n,m) {
  if (m == 0) {
    return 1;
  } else {
    return n * pow(n,m-1);
  }
}

console.log(pow(2,3));