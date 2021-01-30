/**
 * O(N^2) approach, no additional data structures used
 * for each character, check remaining characters for duplications.
 * @param {string[]} str 
 * @returns {boolean}
 */
export const isUniqueCharacters = (str) => {
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 * 
 * Time: O(N)
 * Additional Space: O(N)
 * 
 * @param {string[]} str
 * @returns {boolean}
 */
export const isUniqueCharactersSet = (str) => {
  const chars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
};

/**
 * Sort the original string first then iterater through it.
 * Repeat character will show up next to eachother 
 * so fail if any two characters in a row are the same.
 * 
 * Time: O(N log N)
 * Additional space: O(1)
 * 
 * @param {stirng[]} str
 * @returns {boolean}
 */
export const isUniqueCharactersSort = (str) => {
  // sort string using quicksort
  str.sort();
  for (var i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
};