/**
 * @function 
 * Returns a string randomly.
 * @param {string | string[]} input - base string or array.
 * @param {number?} [length=1] - The length of the returned string.
 * @returns {string} Returns a random string.
 */
function string(input, length = 1) {
  if (!Number.isInteger(length) || length < 0) throw new Error('length must be non-negative number.');
  if (input && typeof input !== 'string' && !Array.isArray(input)) throw new Error('input must be string or array.');

  let chars;
  if (input && typeof input === 'string') {
    chars = input.split('');
  } else if (input) {
    chars = input;
  } else {
    chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  for (const char of chars) {
    if (typeof char !== 'string') throw new Error('all elements of input must be string.');
  }

  const len = parseInt(length);

  let result = '';
  if (len == 0) {
    result = null;
    return result;
  }
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  
  return result;
}

module.exports = string;
