const promiseAll = (promises) => {
  const result = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          result[i] = res;

          if (promises.length - 1 === i) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

const promiseAll2 = (promises) => {
  const responces = [];

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        const result = await promise();
        responces.push(result);

        if (index === promises.length - 1) resolve(responces);
      } catch (err) {
        reject(err);
      }
    });
  });
};
