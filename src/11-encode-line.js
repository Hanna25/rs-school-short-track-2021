/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resultArr = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else if (counter > 1) {
      resultArr.push(counter + str[i]);
      counter = 1;
    } else {
      resultArr.push(str[i]);
    }
  }
  return resultArr.join('');
}

module.exports = encodeLine;
