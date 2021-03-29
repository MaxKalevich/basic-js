const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date === undefined) {
     return 'Unable to determine the time of year!'
    }

    const season = ["winter", "spring", "summer", "autumn",];
    const month = date.toString().split(" ")[1];
    if (month === "Jun" || month === "Jul" || month === "Aug") {
      return season[2]
    } else if (month === "Sep" || month === "Oct" || month === "Nov") {
      return season[3]
    } else if (month === "Dec" || month === "Jan" || month === "Feb") {
      return season[0]
    } else if (month === "Mar" || month === "Apr" || month === "May") {
      return season[1]
    }

    if (Object.prototype.toString.call(date)) {
        throw new Error();
    }

};
