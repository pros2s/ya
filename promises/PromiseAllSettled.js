const promiseAllSettled = (promises) => {
  return Promise.all(
    promises.map((promise) =>
      Promise.resolve(promise).then(
        (value) => ({
          status: 'fulfilled',
          value,
        }),
        (reason) => ({
          status: 'rejected',
          reason,
        })
      )
    )
  );
};
