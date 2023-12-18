const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let transformCommands = {
    '--double-next': false,
    '--double-prev': false,
    '--discard-next': false,
    '--discard-prev': false
  }
  if (!(Object.keys(transformCommands).some(el => arr.includes(el)))) {
    return arr;
  }

  let newArr = [];

  function checkNeedToChangeElement() {
    for (let command in transformCommands) {
      if (transformCommands[command]) {
        return command;
      }
    }
    return false;

  }
  function changeAllCommandsToFalse() {
    for (let command in transformCommands) {
      transformCommands[command] = false;
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      let command = checkNeedToChangeElement()
      if (command) {
        if (command === '--discard-prev' && i > 0) {
          continue;
        } else if (command === '--double-prev' && i > 0) {
          newArr.push(arr[i - 1])
        } else {
          newArr.push(arr[i]);

        }
        if (command === '--discard-next') {
          i += 1
        } else if (command === '--double-next') {
          newArr.push(arr[i]);
        }
        changeAllCommandsToFalse();

      } else {
        transformCommands[arr[i]] = true;
        // newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
module.exports = {
  transform
};
