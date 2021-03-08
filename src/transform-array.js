const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('Not implemented');
  }
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }

  const discardNext = "--discard-next"; // исключает следующий элемент массива из преобразованного массива
  const discardPrev = "--discard-prev"; // исключает предыдущий элемент массива из преобразованного массива
  const doubleNext = "--double-next"; // удваивает следующий элемент массива в преобразованном массиве
  const doublePrev = "--double-prev"; // удваивает предыдущий элемент массива в преобразованном массиве



  newArr.map((el, index, arr) => {

    if (el === "--discard-prev" && index === 0) {
      arr.splice(index, 1, "")

    } else if (el === "--discard-prev") {
      arr.splice(index, 1);
      arr.splice(index - 1, 1, "");
    }

    if (el === "--discard-next" && index === arr[arr.length - 1]) {
      arr.splice(index, 1, "")

    } else if (el === "--discard-next") {
      arr.splice(index, 1);
      arr.splice(index, 1, "");
    }
    if (el === "--double-next" && index === arr[arr.length - 1]) {
      arr.splice(index, 1, "")

    } else if (el === "--double-next") {
      arr.splice(index, 1);
      arr.splice(index + 1, 0, arr[index]);
    }
    if (el === "--double-prev" && index === 0) {
      arr.splice(index, 1, "")

    } else if (el === "--double-prev") {
      arr.splice(index, 1);
      arr.splice(index-1, 0, arr[index-1])
    }

  })

  const res = newArr.
  filter(el => el !== "" && el !== undefined)

  return res
};
