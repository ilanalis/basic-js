const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let biggestInteger = 0;
  for (let i = 0; i < String(n).length; i += 1) {
    const shortInteger = Number(String(n).replace(String(n)[i], ''));
    if (biggestInteger < shortInteger) {
      biggestInteger = shortInteger
    }
  }
  return biggestInteger;
}
module.exports = {
  deleteDigit
};
