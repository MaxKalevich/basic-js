const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  let addition = options.addition;
  let separator = options.separator;

  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  }

  if (addition === undefined) {
    addition = ""
  }

  if (typeof str !== "string") {
    String(str)
  }

  if (typeof addition !== "string") {
    String(addition)
  }

  if (repeatTimes === undefined ) {
    repeatTimes = 1
  }

  if (separator === undefined) {
    separator = "+"
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|"
  }

  const arrayString = [];
  const arrayAddition = [];

  while (arrayString.length < repeatTimes) {
    arrayString.push(str)
  }
  while (arrayAddition.length < additionRepeatTimes) {
    arrayAddition.push(String(addition))
  }
  const arrayAdditionAdd = arrayAddition.map((el, index, arr) => {
        if (index === arr.length - 1) {
          return el
        }
        return el + options.additionSeparator
      }
  ).join('');

  const arrayStringAdd = [...arrayString].map(el => el + arrayAdditionAdd);
  let result = arrayStringAdd.join(separator);
  return String(result);
};
  