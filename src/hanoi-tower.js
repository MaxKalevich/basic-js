const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber && turnsSpeed !== "number") {
    Number(disksNumber);
    Number(turnsSpeed);
  }
  const numberOfTransfers = Math.pow(2, disksNumber) - 1;
  const inAnHour = Math.floor(3600/turnsSpeed * numberOfTransfers);
  return {turns: numberOfTransfers, seconds: inAnHour}
};
