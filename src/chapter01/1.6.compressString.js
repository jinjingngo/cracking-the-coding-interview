/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 * 
 * N = |str|
 * Time: O(N)
 * Aditional space: O(N)
 * 
 * @param {string} str - the input string to be compressed
 * @returns {string} - the compressed string
 */
export const compressString = str => {
    if (!str) return str;
    let compressed = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const start = i;
        while (i + 1 < str.length && char === str[i + 1]) {
            ++i;
        }
        // JS does not have a StringBuilder/StringBuffer style class for creating strings
        // string concatenation has been heavily optimised in JS implementations and
        // is faster than creating a string via an array then using a `.join(')` at the end.
        compressed += (i - start + 1) + char;
    }
    return compressed.length < str.length ? compressed : str;
};
