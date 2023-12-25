const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let indexOfValuesBelow0 = [];
  let result = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      const currentValue = matrix[i][y]
      if (indexOfValuesBelow0.includes(y)) {
        continue;
      }
      if (currentValue === 0) {
        indexOfValuesBelow0.push(y);
        continue;
      }
      result += currentValue;
    }
  }
  return result;
}

console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]))

module.exports = {
  getMatrixElementsSum
};
