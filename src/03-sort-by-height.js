/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    let prev = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[prev] > arr[j] && arr[prev] !== -1 && arr[j] !== -1) {
        const tmp = arr[prev];
        // eslint-disable-next-line no-param-reassign
        arr[prev] = arr[j];
        // eslint-disable-next-line no-param-reassign
        arr[j] = tmp;
        swap = true;
      } else if (arr[j] !== -1) {
        prev = j;
      }
    }
    if (!swap) {
      return arr;
    }
  }
  return arr;
}

module.exports = sortByHeight;
