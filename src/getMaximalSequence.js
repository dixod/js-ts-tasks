/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let max = [];
  let current = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      current.push(arr[i]);
    } else {
      if (current.length > max.length) {
        max = current;
      }
      current = [arr[i]];
    }
  }

  if (current.length > max.length) {
    max = current;
  }

  return max;
};
