const compress = (arr) => {
  arr.sort((a, b) => a - b);

  // 1, 2, 3, 4, 6, 8, 9, 11, 12, 13
  result = [arr[0]];
  let isDiaposon = false;

  for (let i = 1; i <= arr.length; i++) {
    const cur = arr[i];
    const prev = arr[i - 1];

    if (cur - prev === 1) {
      isDiaposon = true;
      continue;
    }

    if (isDiaposon) result[result.length - 1] += `-${prev}`;

    if (cur) result.push(cur);

    isDiaposon = false;
  }

  return result.join(',');
};

console.log(compress([1, 2, 3, 4, 6, 8, 9, 11, 12, 13])); // '0-5,8-9,11'
console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'
console.log(compress([1, 2])); // '1-2'
