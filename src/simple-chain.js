const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrayChain : [],

  getLength() {
    return Number(this.arrayChain.length);
  },

  addLink(value) {
    if (typeof value !== "string") {
      String(value);
    }
    if (value === undefined) {
      this.arrayChain.push(`('()')`);
      return this
    }
    this.arrayChain.push(`( ${value} )`);
    return this
  },

  removeLink(position) {
    if (typeof position !== "number") {
      this.arrayChain = [];
      throw new Error('THROWN');
    }
    this.arrayChain.splice(position-1, 1);
    return this
  },

  reverseChain() {
    this.arrayChain = this.arrayChain.reverse();
    return this
  },

  finishChain() {
    const res = this.arrayChain.join("~~");
    this.arrayChain = [];
    return res
  }
};

module.exports = chainMaker;
