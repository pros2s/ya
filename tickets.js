// У нас есть набор билетов вида:

// [
//   { from: 'London', to: 'Moscow' },
//   { from' 'SPb', to: 'Tokio' },
//   { from: 'NY', to: 'London' },
//   { from: 'Moscow', to: 'SPb' },
// ]

// {
//   London: ['to', 2],
//   Moscow: ['from', 2],
//   SPb: ['to', 2],
//   Tokio: ['to', 1],
//   NY: ['from', 1],
// }

// {
//   London: Moscow,
//   SPb: Tokio,
//   NY: London,
//   Moscow: SPb,
// }

function paths(arr) {
  const map = new Map();
  const directions = new Map();

  for (const { from, to } of arr) {
    if (map.has(from)) {
      map.set(from, ['from', map.get(from)[1] + 1]);
    } else {
      map.set(from, ['from', 1]);
    }

    if (map.has(to)) {
      map.set(to, ['to', map.get(to)[1] + 1]);
    } else {
      map.set(to, ['to', 1]);
    }

    directions.set(from, to);
  }

  let start = [...map].filter(([_, arr]) => arr[0] === 'from' && arr[1] === 1)[0][0];

  return arr.map(() => {
    const obj = {};
    const nextStart = directions.get(start);

    obj.from = start;
    obj.to = nextStart;
    start = nextStart;

    return obj;
  });
}

function toMaps(arr) {
  const mapFrom = new Map();
  const mapTo = new Map();

  for (const ticket of arr) {
    mapFrom.set(ticket.from, ticket);
    mapTo.set(ticket.to, ticket);
  }

  let nextTicket = arr.find(({ from }) => !mapTo.has(from));

  return arr.map(() => {
    const currentTicket = nextTicket;
    nextTicket = mapFrom.get(currentTicket.to);

    return currentTicket;
  });
}

console.log(
  toMaps([
    { from: 'London', to: 'Moscow' },
    { from: 'SPb', to: 'Paris' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    { from: 'Popengagen', to: 'Krasnoyarsk' },
    { from: 'Paris', to: 'Popengagen' },
  ])
);

// Из этих билетов можно построить единственный, неразрывный маршрут. Петель и повторов в маршруте нет.
// Нужно написать программу, которая возвращает эти же объекты билетов в порядке следования по маршруту.
