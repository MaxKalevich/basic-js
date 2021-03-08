const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('Not implemented');
  }

  const newArray = [].concat(...arr);
  newArray.map((el, index, arr) => {
    if (index === 0 && index === arr.length - 1 ) {
      return arr
    }
    if (el === "--discard-prev" && typeof el !== undefined) {
      arr.splice(index, 1);
      arr.splice(index-1, 1);
    }
    if (el === "--discard-next" && typeof el !== undefined) {
      arr.splice(index, 1);
      arr.splice(index+1, 1);
    }
    if (el === "--double-next" && typeof el !== undefined) {
      arr.splice(index, 1); // Удаляем "--double-next"
      arr.splice(index+1, 0, arr[index]); // Вставляем элемент , который встал на место "--double-next"
    }
    if (el === "--double-prev" && typeof el !== undefined) {
      arr.splice(index, 1); // Удаляем "--double-prev"
      arr.splice(index, 0, arr[index-1]); // Вставляем элемент , который встал на место "--double-next"
    }

  })
  return newArray

};
