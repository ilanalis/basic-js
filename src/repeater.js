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
    if (!options.separator) {
        options.separator = '+';
    }
    if (!options.additionSeparator) {
        options.additionSeparator = '|';
    }
    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }
    if (!options.addition) {
        options.addition = '';
    }
    let additionString = `${options.addition} `
        .repeat(options.additionRepeatTimes)
        .split(' ');
    console.log(additionString, 'tttttttttt');
    additionString = additionString
        .slice(0, additionString.length - 1)
        .join(options.additionSeparator);

    let resultString = `${str}${additionString}${uniqSeparator.separator}`
        .repeat(options.repeatTimes)
        .split(`${uniqSeparator.separator}`);
    // console.log(resultString, 'fdff')
    resultString = resultString
        .slice(0, resultString.length - 1)
        .join(options.separator);

    return resultString;
}
