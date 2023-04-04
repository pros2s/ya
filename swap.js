const swap = (str) => {
  let strArr = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const sElem = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = sElem;

    start++;
    end--;
  }

  return strArr.join('');
};

console.log(swap('somef'));
console.log('somef');
