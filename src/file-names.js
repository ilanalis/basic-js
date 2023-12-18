const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // let namesCopy = names;
  // const set = new Set(names);
  // console.log(set.size, names.length)
  // if (set.size === names.length) {
  //   console.log('iiidsadSSSSSSSSSSSSSSSSSSSSSSSSS')
  //   return namesCopy;
  // }

  // const countRepeat = {};
  // const numbersOfCurrentName = {};
  // names.forEach(name => {
  //   if (countRepeat[name]) {
  //     countRepeat[name] = countRepeat[name] += 1
  //     numbersOfCurrentName[name] = 1;
  //   } else {
  //     countRepeat[name] = 1;
  //   }
  // });
  // namesCopy = namesCopy.map(name => {
  //   if (countRepeat[name]) {
  //     return name
  //   }
  //   const currentName = `${name}(${numbersOfCurrentName[name]})`;
  //   numbersOfCurrentName[name] += 1;
  //   return currentName;
  // });
  // console.log(namesCopy);
  // return renameFiles(namesCopy);
}

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])

module.exports = {
  renameFiles
};
