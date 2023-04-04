/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C
*/

function foo(callback) {
  setTimeout(function () {
    callback('A');
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback('B');
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback('C');
  }, Math.random() * 100);
}

const tasks = [foo, bar, baz].map((fn) => new Promise((resolve) => fn(resolve)));

Promise.all(tasks).then((results) => results.forEach((result) => console.log(result)));
