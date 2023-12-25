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

  const commandsKeys = Object.keys(transformCommands);
  if (!(commandsKeys.some(el => arr.includes(el)))) {
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
    if (!commandsKeys.includes(arr[i])) {
      let command = checkNeedToChangeElement()
      if (command) {
        if (command === '--discard-prev' && i > 1) {
          if ((arr[i - 3]) === '--discard-next') {
            changeAllCommandsToFalse();
            newArr.push(arr[i]);
            continue;
          }
          newArr.pop()
        } else if (command === '--double-prev' && i > 1) {
          if ((arr[i - 3]) === '--discard-next') {
            changeAllCommandsToFalse();
            newArr.push(arr[i]);
            continue;
          }
          if (typeof arr[i - 2] === 'number') {
            newArr.push(arr[i - 2])
          }
        } else if (command === '--discard-next') {
          changeAllCommandsToFalse();
          continue;
        } else if (command === '--double-next') {
          newArr.push(arr[i]);
        }
        changeAllCommandsToFalse();
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    } else {
      transformCommands[arr[i]] = true;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
