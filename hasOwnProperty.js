var obj = {
  foo: 1,
  hasOwnProperty: true,
};

var result = [];

for (var key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    // obj.hasOwnProperty(key)
    result.push(key);
  }
}

console.log(result);
