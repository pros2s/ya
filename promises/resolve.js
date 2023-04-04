const promise = new Promise((res, rej) => rej(1));

promise
  .finally(() => console.log('finally'))
  .then((res) => {
    const result = res * 2;
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.error(err);
    return 3;
  })
  .then((res) => console.log(res * 5));
