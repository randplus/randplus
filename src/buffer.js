const randBuffer = require('@randplus/buffer');

/**
 * @function 
 * Returns buffer randomly.
 * @param {number?} length - The length of the buffer.
 * @returns {Buffer} Returns a random buffer.
 */
function buffer(length) {
  return randBuffer(length)
}

module.exports = buffer;
