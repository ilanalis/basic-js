const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // let set = new Set();
  // let result = {}

  // for (let i = 0; i < domains.length; i += 1) {
  //   domains[i].split('.').reverse().forEach(domain => {
  //     if (set.has(domain)) {
  //       result[domain] += 1;
  //     } else {
  //       result[domain] = 1;
  //     }
  //     set.add(domain);

  //   })
  //   console.log(domains[i].split('.').reverse())
  // }
  // console.log(set);


  // console.log(result)
}

getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
])

module.exports = {
  getDNSStats
};
