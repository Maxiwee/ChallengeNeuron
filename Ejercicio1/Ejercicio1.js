function countRepeatedNumber(arr) {
  let numbersRepeated = [];

  if (!arr || !arr.length) {
    return 'No ingreso un arreglo de números';
  }

  arr.forEach(x => {
    if (numbersRepeated.length === 0) {
      numbersRepeated.push({ number: x, count: 1 });
    } else {
      const find = numbersRepeated.find(y => x === y.number);

      if (find) {
        ++find.count;
      } else {
        numbersRepeated.push({ number: x, count: 1 });
      }
    }
  });

  let numMaxCount = 0;
  let num = [];

  numbersRepeated.forEach(x => {
    if (x.count >= numMaxCount) {
      numMaxCount = x.count;
      num.push(x.number);
    }
  });

  return {
    'Arreglo de incidencias': numbersRepeated,
    'Número más repetido': num.length === 1 ? num[0] : num,
  };
}

const response = countRepeatedNumber();

console.log(response);

// DIBUJOS --> https://prnt.sc/pKRx3O4AG7ct
