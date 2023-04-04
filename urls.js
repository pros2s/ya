function limitAll(arr, limit) {
  const answers = [];

  for (let i = 0; i < arr.length; i++) {
    limit += answers.length;

    if (i < limit) {
      fetch(arr[i])
        .then((res) => res.json())
        .then((res) => (answers[i] = res))
        .catch((err) => {
          throw new Error(err);
        }); // Сказано ошибки обрабатывать не нужно, но я на всякий )
    }
  }

  return answers;

  // Тут я не понял, нужно возвращать промис с ответами или сами ответы

  // return new Promise((res, rej) => {
  //   res(() => answers);
  // });
}

/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно

declare function fetch(url: string): Promise<string>;
declare function $.get(url: string, callback: (res: string) => void): void;
*/

function parallelLimit(urls, limit, cb) {
  const result = [];
  if (urls.length === 0) return cb(null, result);

  const cache = new Map();
  let requested = 0;
  let received = 0;

  limit = Math.min(urls.length, limit);

  function request() {
    const index = requested;
    if (index >= urls.length) return;
    requested++;

    const url = urls[index];
    if (!cache.has(url)) {
      cache.set(url, fetch(url));
      cache.get(url).then(() => {
        request();
      });
    } else {
      request();
    }

    cache.get(url).then((data) => {
      result[index] = data;
      received++;

      if (received === urls.length) {
        cb(null, result);
      }
    });
  }

  for (let i = 0; i < limit; i++) request();
}
