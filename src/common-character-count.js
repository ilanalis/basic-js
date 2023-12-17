const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // const biggestString = s1.length > s2.length ? 
  let baseString = s1;
  let count = 0;


  for (let i = 0; i < s2.length; i += 1) {
    const letter = s2[i]
    if (baseString.includes(letter)) {
      count += 1;
      baseString = baseString.replace(baseString[baseString.indexOf(letter)], '');
    }
  }
  return count;
}
module.exports = {
  getCommonCharacterCount
};
