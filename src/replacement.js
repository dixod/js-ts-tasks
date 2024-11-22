/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let num = Math.abs(number);
    let digitCount = num.toString().length;
    switch (digitCount) {
      case 1:
        result.push(1);
        break;
      case 2:
        result.push(2);
        break;
      case 3:
        result.push(3);
        break;
      default:
        result.push(4);
    }
  }
  return result
}