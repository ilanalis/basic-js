const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let uniqSeparator = {
    separator: '**'
  };
  if (str === null) {
    str = 'null';
  }
  if (options.addition === null) {
    options.addition = 'null';
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  if (options.addition === undefined) {
    options.addition = ''
  }
  if (!(typeof (str.toString()) === 'string') || (typeof str !== 'string')) {
    str = String(str);
  }
  if (!(typeof options.addition.toString() === 'string') || typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }
  let additionString = `${options.addition}${uniqSeparator.separator}`
    .repeat(options.additionRepeatTimes)
    .split(`${uniqSeparator.separator}`);
  additionString = additionString
    .slice(0, additionString.length - 1)
    .join(options.additionSeparator);

  let resultString = `${str}${additionString}${uniqSeparator.separator}`
    .repeat(options.repeatTimes)
    .split(`${uniqSeparator.separator}`);
  resultString = resultString
    .slice(0, resultString.length - 1)
    .join(options.separator)

  return resultString;
}

module.exports = {
  repeater
};
