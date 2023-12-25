const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    resultMatrix[i] = [...matrix[i].map(el => el = 0)];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      let currentValue = matrix[i][y];
      if (!currentValue) {
        continue
      } else {
        if (matrix[i - 1]) {
          if (typeof matrix[i - 1][y - 1] !== 'undefined') {
            resultMatrix[i - 1][y - 1] += 1;
          }
          if (typeof matrix[i - 1][y + 1] !== 'undefined') {
            resultMatrix[i - 1][y + 1] += 1;
          }
          resultMatrix[i - 1][y] += 1;
        }
        if (matrix[i + 1]) {
          if (typeof matrix[i + 1][y - 1] !== 'undefined') {
            resultMatrix[i + 1][y - 1] += 1;
          }
          if (typeof matrix[i + 1][y + 1] !== 'undefined') {
            resultMatrix[i + 1][y + 1] += 1;
          }
          resultMatrix[i + 1][y] += 1;
        }
        if (typeof matrix[i][y - 1] !== 'undefined') {
          resultMatrix[i][y - 1] += 1;
        }
        if (typeof matrix[i][y + 1] !== 'undefined') {
          resultMatrix[i][y + 1] += 1;
        }
      }
    }
  }
  return resultMatrix
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
module.exports = {
  minesweeper
};
