/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
return function (start, end) {
    let prime = [];
    if (start < 2) start = 2;
    if (end > highestNumber) end = highestNumber;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    return prime;
  }
}