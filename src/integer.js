/**
 * @function 
 * Returns an integer randomly.
 * @param {number | boolean | null} [start=0] - The start of number. If start is boolean, treat it as inc.
 * @param {number} [end=1] - The end of number.
 * @param {boolean} [inc=true] - Choose whether to include the end of number.
 * @returns {number} Returns a random integer.
 */
function integer(start = 0, end = 1, inc = true) {
  if (typeof start === 'boolean') {
    inc = start, start = 0, end = 1;
  }
  if (typeof start !== 'number' || typeof end !== 'number') throw new Error('start and end must be numbers.');
  if (typeof inc !== 'boolean') throw new Error('inc must be boolean.');

  const startNum = parseInt(start, 10);
  const endNum = parseInt(end, 10);
  if (startNum > endNum) throw new Error('start must be less than or equal to end.');

  const result = Math.floor(Math.random() * (endNum - startNum + (inc ? 1 : 0))) + startNum;

  return result;
}

module.exports = integer;
