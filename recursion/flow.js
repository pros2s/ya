/*
Написать реализацию функции flow, создающую функцию, которая прогонит переданные в неё данные через все функции, переданные в сам flow.

Пример использования:

const add = x => y => y + x
const multiple = x => y => y * x

flow(
  add(2),
  multiple(3),
)(4);

Должно вывести 18 // ((4+2)*3)

Аналог multiple(3)(add(2)(4))
*/

// function flow(...funcs) {
//   return function flowed(...args) {
//     const result = funcs.shift()(...args);

//     if (funcs.length > 0) return flowed(result);

//     return result;
//   };
// }

function flow(...list) {
  let result = 0;

  return function (...args) {
    for (let i = 0; i < list.length; i++) {
      result = i === 0 ? list[i](...args) : list[i](result);
    }

    return result;
  };
}

const add = (x) => (y) => y + x;
const multiple = (x) => (y) => y * x;
const devide = (x) => (y) => y / x;

console.log(flow(add(2), multiple(3), devide(2))(4));
