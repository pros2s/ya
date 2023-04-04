/**
 * На вход функции подаётся массив границ и массив значений. Оба массива целых чисел, отсортированных по возрастанию.
 * Например, границы [4, 8] и значения [1, 3, 4, 5, 8, 9].
 * Нужно раскидать значения по диапазонам (-inf; 4], (4; 8], (8; +inf) и для каждого
 * посчитать количество и сумму попавших в неё значений:
 * [1, 3, 4] -> {quantity: 3, sum: 8}, [5, 8] -> {quantity: 2, sum: 13}, [9] -> {quantity: 1, sum: 9}
 * На выходе всегда ожидается массив размером на 1 больше, чем количество границ.
 * --------------------------------
 * [4, 8], [1, 3, 4, 5, 8, 9] => [{quantity: 3, sum: 8}, {quantity: 2, sum: 13}, {quantity: 1, sum: 9}]
 *        4     8
 *  1 3 4 | 5 8 | 9
 * 2 границы создают 3 диапазона.
 * --------------------------------
 * [5], [2, 4, 6, 8] => [{quantity: 2, sum: 6}, {quantity: 2, sum: 14}]
 *     5
 * 2 4 | 6 8
 * Числа 2, 4 попадают в первый диапазон, остальные - во второй.
 * --------------------------------
 *  [7], [1, 2] => [{quantity: 2, sum: 3}, {quantity: 0, sum: 0}]
 *      7
 *  1 2 |
 * Второй диапазон пуст.
 **/

function rigthBorders(borders, last) {
  const rigthBorders = [];
  rigthBorders.push(borders[0]);

  borders.forEach((_, i) => {
    if (borders[i + 1]) rigthBorders.push(borders[i + 1]);
  });

  rigthBorders.push(last);
  return rigthBorders;
}

function calculate(borders, values) {
  const result = [];
  const diaposons = rigthBorders(borders, values[values.length - 1]);
  let curRigthBorder = 0;
  let quantity = 0;
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    const cur = values[i];
    const next = values[i + 1];

    quantity++;
    sum += cur;

    if (next && next > diaposons[curRigthBorder]) {
      result.push({ quantity, sum });

      curRigthBorder++;
      quantity = 0;
      sum = 0;
    } else if (!next) {
      result.push({ quantity, sum });

      if (cur <= borders[borders.length - 1]) {
        result.push({ quantity: 0, sum: 0 });
      }
    }
  }

  return result;
}

// console.log(calculate([5], [2, 4, 6, 8]));

function calculate2(borders, values) {
  let curRangeIndex = 0;
  const res = Array(borders.length + 1)
    .fill(0)
    .map(() => ({ quantity: 0, sum: 0 }));

  for (const value of values) {
    if (value > borders[curRangeIndex] && curRangeIndex < borders.length) {
      curRangeIndex += 1;
    }

    res[curRangeIndex].quantity += 1;
    res[curRangeIndex].sum += value;
  }

  return res;
}
// console.log(calculate([1, 5], [2, 4, 6, 8]));
console.log(calculate2([1, 5], [2, 4, 5]));
