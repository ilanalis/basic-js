const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false
  }
  const arrayFromString = n.split('-')
  if (arrayFromString.length !== 6) {
    return false
  }
  if (arrayFromString.some(el => {
    for (let i = 0; i < el.length; i += 1) {
      const currentCharacter = el[i]
      if (!Object.is(Number(currentCharacter), NaN)) {
        if (Number(el[i]) < 0 || Number(el[i]) > 9) {
          return true
        }
      } else {
        if (currentCharacter.charCodeAt() < 65 || currentCharacter.charCodeAt() > 70) {
          return true
        }
      }
    }
    return false
  })) {
    return false
  } else {
    return true
  }
}
module.exports = {
  isMAC48Address
};
