function countRepeatedNumber(arr) {
  let numbersRepeated = [];

  if (!arr || !arr.length) {
    return 'No ingreso un arreglo de números';
  }

  arr.forEach(x => {
    const find = numbersRepeated.find(y => x === y.number);

    if (find) {
      ++find.count;
    } else {
      numbersRepeated.push({ number: x, count: 1 });
    }
  });

  let numMaxCount = 0;
  let num = [];

  numbersRepeated
    .sort((a, b) => b.count - a.count)
    .forEach(x => {
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

const response = countRepeatedNumber([8, 8, 3, 1, 3, 4, 5, 3, 7, 1, 2, 1]);

console.log(response);

// DIBUJOS --> https://prnt.sc/pKRx3O4AG7ct
