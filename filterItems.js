// Написать функцию, которая исключает из списка товары по заданным фильтрам.
// Товары — любые объекты, фильтры — объекты вида { key: '', value: ''} . Надо исключить из списка товаров объекты, которые удовлетворяют хотя бы одному фильтру.
// Надо написать функцию, которая
// на вход принимает два массива: товары и фильтры,
// на выходе отдает отфильтрованный массив товаров

const filterItems = (items, filters) => {
  return items.filter((item) => {
    for (const { key, value } of filters) {
      if (item[key] === value) return false;
    }

    return true;
  });
};

const items = [
  {
    model: 'iPhone',
    color: 'black',
    memory: 64,
  },
  { model: 'iPhone', color: 'white' },
  { model: 'iPhone', color: 'silver' },
  { model: 'macBook', color: 'silver' },
];

const filters = [
  { key: 'color', value: 'silver' },
  { key: 'color', value: 'gold' },
  { key: 'model', value: 'macBook' },
];
console.log(filterItems(items, filters));

// // Expected output
// [
//   { model: 'iPhone', color: 'black', memory: 64 },
//   { model: 'iPhone', color: 'white' }
// ]

// Prepare filters for fast search
// -----------------------------------------
// {
//   color: new Set(['white', 'black']),
// }
function prepareFilters(filters) {
  const res = {};
  // {
  //    color: Set(silver, gold),
  //    model: Set(macBook)
  // }

  filters.forEach((filter) => {
    const { key, value } = filter;

    if (!res[key]) res[key] = new Set();

    res[key].add(value);
  });

  return res;
}

function filter(goods, filters) {
  const preparedFilters = prepareFilters(filters);
  const filteredKeys = Object.keys(preparedFilters); // ['color', 'model']

  return goods.filter((good) => {
    return !filteredKeys.some((key) => {
      const filteredValuesSet = preparedFilters[key];
      const value = good[key];

      return filteredValuesSet.has(value);
    });
  });
}

function filter2(goods, filters) {
  return goods.filter((good) => {
    return !filters.some((filter) => {
      const { key, value } = filter;
      return good[key] === value;
    });
  });
}
