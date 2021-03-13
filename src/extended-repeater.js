const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;

  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  }
  let addition = options.addition;
  if (addition === undefined) {
    addition = ''
  }
  if (typeof str !== "string") {
    str.toString();
  }
  if (typeof addition !== "string") {
    addition.toString();
  }
  if (repeatTimes === undefined ) {
    repeatTimes = 1
  }
  if (options.separator === undefined) {
    options.separator = "+"
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|"
  }

  const arrayString = []; // массив с количеством повторений строки
  const arrayAddition = []; // массив с количеством повторений доп. строки

  while (arrayString.length < repeatTimes) { // добавляю элементы в массив
    arrayString.push(str)
  }
  while (arrayAddition.length < additionRepeatTimes) { // добавляю элементы в массив
    arrayAddition.push(options.addition)
  }

  const arrayAdditionAdd = [...arrayAddition].map((el, index, arr) => {
        if (index === arr.length - 1) {
          return el
        }
        return el + options.additionSeparator
      }
  ).toString().split(",").join("")

  const arrayStringAdd = [...arrayString].map(el => el + arrayAdditionAdd)
  let result = arrayStringAdd.toString().split(",").join(options.separator)
  return result.toString()
};
  