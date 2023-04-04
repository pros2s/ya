function compose (...functions) {
  return function (...args) {
    const res = functions.pop()(...args);

    if (functions.length === 0) return res;

    return compose(...functions)(res);
  }
}

const square = x => x * x;
const times2 = x => x * 2;
const sum = (a, b, c) => a + b * c;

console.log(compose(square, times2, sum)(2, 3, 4));