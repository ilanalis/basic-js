const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position >= this.chainArray.length || position < 1 || typeof position !== 'number') {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArray.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = this.chainArray.join('~~');
    this.chainArray = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
