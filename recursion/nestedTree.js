// Дана древовидная структура следующего формата:

// const tree = {
//      type: 'nested',
//      children: [
//         { type: 'added', value: 42 },
//         { type: 'pupa', age: 23},
//         { type: 'lupa', age: 42}
//         {
//             type: 'nested',
//             children: [
//                { type: 'added', value: 43 },
//                {
//                  type: 'nested,
//                    children: [
//                       { type: 'added', value: 44 },
//                    ]
//                 }
//             ]
//         },
//         { type: 'added', value: 45 },
//         ...
//      ]
// }

// Необходимо написать функцию getNodes(tree, type) , которая возвращает все ноды в порядке следования, соответсвующие переданному типу.
// Глубина вложенности любая.

// const getNodes = (tree, type) => {
//   const result = [];

//   if (!Object.entries(tree).length) return result;

//   const stack = [tree];

//   while (stack.length) {
//       const curTree = stack.pop();

//       if (curTree.type === type) result.push(curTree);

//       if (curTree.type === 'nested') {
//           for (const child of curTree.children) {
//               if (child.type === type) result.push(child);
//               else if (child.type === 'nested') {
//                   stack.push(child);
//                   break;
//               }
//           }
//       }
//   }

//   return result;
// }

// const getNodes = (tree, type) => {
//   const result = [];

//   if (type === 'nested') {
//     for (const child of tree.children) {
//       return getNodes(child, child.type);
//     }
//   }

//   result.push(tree.value);
//   return result;
// };

const getNodes2 = (tree, type) => {
  const stack = [tree];
  const result = [];

  while (stack.length) {
    const element = stack.pop();

    if (element.type === type) {
      result.push(element);
    }

    if (element.type === 'nested') {
      for (let i = element.children.length - 1; i >= 0; i--) {
        stack.push(element.children[i]);
      }
    }
  }
  return result;
};

// [
//     { type: 'added', value: 42 },
//     { type: 'added', value: 43 },
//     { type: 'added', value: 44 },
//     ...
// ]

// должно работать на произвольной вложенности входных данных
// реализовать максимально эффективно с точки зрения процессора и памяти
// не использовать shift/unshift
// не делать лишних циклов по массиву
// нормаль сделайте - нормально будет
