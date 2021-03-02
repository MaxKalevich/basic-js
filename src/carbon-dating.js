const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string" || isNaN(sampleActivity)) return false;
    if ( !Number(sampleActivity[0]) ) return false;
    if (sampleActivity >= 15) return false;
  let k = (Math.log(2))/HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY/sampleActivity))/k;
  return Math.ceil(Number(t));
};
