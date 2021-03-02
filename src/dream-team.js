const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const newNames = [];
  for (let i = 0; i < members.length; i++ ) {
    if (typeof members[i] === "string") {
      newNames.push(members[i])
    }
  }
  const array = newNames.sort().map(el => el.trim()[0]).join("").toUpperCase();
  return array.split("").sort().join("");
};
