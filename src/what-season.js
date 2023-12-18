const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date[Symbol.toStringTag] === 'Date' || !(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  const month = date.getMonth();
  const seasons = {
    '2': 'spring',
    '5': 'summer',
    '8': 'autumn',
    '11': 'winter',
    '0': 'winter'
  }
  let season;
  Object.keys(seasons).forEach(key => {
    const keyNumber = +key;
    if (month === keyNumber || month === keyNumber + 2 || month === keyNumber + 1) {
      season = seasons[key]
    }
  })
  return season;
}
getSeason(new Date(2017, 6, 11, 23, 45, 11, 500))
module.exports = {
  getSeason
};
