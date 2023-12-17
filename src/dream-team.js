const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !members.length) return false;
  const filteredArray = members.filter(el => typeof el === 'string' && el != ' ');
  const namesWithoutWhitespace = filteredArray.map(el => {
    return el.trim();
  })
  const arrayWithFirstLetters = namesWithoutWhitespace.map(name => name[0]).sort((a, b) => a.localeCompare(b));
  const arrayWithUppercaseLetters = arrayWithFirstLetters.map(letter => letter.toUpperCase());
  return arrayWithUppercaseLetters.join('');
}

module.exports = {
  createDreamTeam
};
