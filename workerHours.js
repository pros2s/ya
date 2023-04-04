// input:
// [
//   [9, 10],
//   [16, 17],
//   [14, 15],
//   [12, 14]
// ]
// output:
// [
//   [10, 12],
//   [15, 16],
//   [17, 18]
// ]
// sorted:
// [
//   [10, 11],
//   [12, 14],
//   [13, 17],
//   [14, 16],
// ]

const array = [
  [9, 10],
  [16, 17],
  [14, 15],
  [12, 14],
];

const workTime = (arr) => {
  arr.sort((prev, cur) => prev[0] - cur[0]);

  const result = [];
  let latest = arr[0][1];

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    const next = arr[i + 1];

    if (i === 0 && cur[0] > 9) result.push([9, cur[0]]);

    if (next) {
      if (latest < next[0]) {
        result.push([latest, next[0]]);
      }
      latest = Math.max(latest, next[1]);
    }

    if (!next && latest < 18) result.push([latest, 18]);
  }

  return result;
};

console.log(workTime(array));
