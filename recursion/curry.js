// Нужно написать каррирование

function sum(a, b, c) {
  return a + b + c;
}

// curry(sum)(1, 2, 3, 4);  // 6
// curry(sum)(1, 2)(3);  // 6
// curry(sum)(1)(2)(3);  // 6

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func(...args);

    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
}

console.log(curry(sum)(1, 2, 3, 4));
console.log(curry(sum)(1, 2)(3));
console.log(curry(sum)(1)(2)(3));

function curry2(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return curried.bind(this, ...args);
  };
}

console.log(curry2(sum)(1, 2, 3, 4));
console.log(curry2(sum)(1, 2)(3));
console.log(curry2(sum)(1)(2)(3));
