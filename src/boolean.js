/**
 * @function
 * Returns true/false randomly.
 * @returns {boolean} Returns one boolean.
 */
function boolean() {
  const result = Math.random() > 0.5;
  return result;
}

module.exports = boolean;
