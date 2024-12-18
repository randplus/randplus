/**
 * @function 
 * Returns one result from possible results.
 * @param {Array<any>} [input=[]] - Possible results.
 * @returns {any} Returns one result.
 */
function array(input = []) {
  if(!Array.isArray(input)) throw new Error('input must be array.');

  if (input.length == 0) return null;
  const result = input[Math.floor(Math.random() * input.length)];

  return result;
}

module.exports = array;
