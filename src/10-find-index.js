/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(/* array, value */) {
  throw new Error('Not implemented');
  // let length = array.length - 1;
  // let i = 0;
  // let elem = array[i];
  // while (elem !== value) {
  //   i = Math.round(length / 2);
  //   if (array[i] === value) {
  //     elem = array[i];
  //   } else if (array[i] > value) {
  //     length -= i;
  //   } else {
  //     length += i;
  //   }
  // }
  // return i;
}

module.exports = findIndex;
