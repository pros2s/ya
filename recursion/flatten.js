// flatten([1,{},() => {},[],[1,2,[{}]], 3]) -> [1, {}, () => {}, 1, 2, {}, 3]
// flatten([1, [2, 3, [4], 5], 6, 7]) -> [1, 2, 3, 4, 5, 6, 7]

function flatten(arr) {
  let result = [];

  for (const elem of arr) {
    if (Array.isArray(elem)) {
      result = [...result, ...flatten(elem)];
      continue;
    }

    result.push(elem);
  }

  return result;
}

console.log(flatten([1, [2, 3, [4], 5], 6, 7]));
console.log(flatten([1, {}, () => {}, [], [1, 2, [{}]], 3]));
