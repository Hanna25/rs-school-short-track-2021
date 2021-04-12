/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  let numbers = `${n}`;
  numbers = numbers.split('');
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers.slice();
    currentNum[i] = '';
    // eslint-disable-next-line radix
    arr.push(parseInt(currentNum.join('')));
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

module.exports = deleteDigit;
