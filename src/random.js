const randInc1 = require('@randplus/0to1');

/**
 * @function 
 * Default random function.
 * @param {boolean?} [inc=false] - Choose whether to include 1.
 * @returns {number} Returns a random.
 */
function random(inc = false) {
  if (typeof inc !== 'boolean') throw new Error('inc must be boolean.');
  if (inc) {
    return randInc1();
  } else {
    return Math.random();
  }
}

module.exports = random;
