// O(N^2) approach, no additional data structures used
// for each character, check remaining characters for duplications.
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
