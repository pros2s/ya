function filter(arr, callback) {
  return arr.reduce((acc, elem, index, arr) => {
    if (callback(elem, index, arr)) acc.push(elem);

    return acc;
  }, []);
}
