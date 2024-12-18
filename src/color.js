const randColor = require('@randplus/color');

/**
 * @function 
 * Returns a color randomly.
 * @param {'hex' | 'rgb' | 'word'} format 
 * @param {{ language?: 'en' | 'ja' | 'cn'; prefix?: string } | undefined} options 
 * @returns {string | [number, number, number]} - Returns a random color.
 */
function color(format, options) {
  return randColor(format, options)
}

/**
 * Returns a hex randomly.
 * @param {string?} prefix - Character to place before hex.
 * @returns {string} Returns a random hex.
 */
function hex(prefix) {
  return randColor.hex(prefix);
}

/**
 * @function 
 * Returns a rgb randomly.
 * @returns {[number, number, number]} Returns a random rgb.
 */
function rgb() {
  return randColor.rgb();
}

/**
 * @function 
 * Returns a color name randomly.
 * @param {'en' | 'ja' | 'cn' | null} language - Color name language. 
 * @returns {string} Returns a random color name.
 */
function word(language) {
  return randColor.word(language);
}

module.exports = color;
module.exports.hex = hex;
module.exports.rgb = rgb;
module.exports.word = word;
