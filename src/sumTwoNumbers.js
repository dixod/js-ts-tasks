/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const first = Number(firstNumber);
  const second = Number(secondNumber);
  if (isNaN(first) || isNaN(second)) {
    return '-15';
  }
  return (first + second).toString();
};
