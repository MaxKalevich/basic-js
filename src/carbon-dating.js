const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity >= 15 || typeof sampleActivity !== "string" || isNaN(sampleActivity) || !Number(sampleActivity[0])) return false;
    return Math.ceil(Number((Math.log(MODERN_ACTIVITY / sampleActivity)) / ((Math.log(2)) / HALF_LIFE_PERIOD)));
};
