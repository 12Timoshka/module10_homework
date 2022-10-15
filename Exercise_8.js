let mansAge = new Map([
    [30, "Vasya"],
    [40, "Volodya"],
    [100, "Valentin"]
  ]);
  
  mansAge.forEach ((value, key) => {
      console.log (${value} 'x' = ${key} 'y');
  })