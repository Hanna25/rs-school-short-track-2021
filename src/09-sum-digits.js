/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const strN = `${n}`;
  let sum = 0;
  for (let i = 0; i < strN.length; i++) {
    // eslint-disable-next-line radix
    sum += parseInt(strN[i]);
  }
  if (sum > 9) {
    return getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
