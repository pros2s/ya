function map(arr, callback) {
  return arr.reduce((acc, elem, index, arr) => {
    const result = callback(elem, index, arr);
    acc.push(result);
    return acc;
  }, []);
}
