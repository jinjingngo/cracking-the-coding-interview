/**
 * Duplicate the rotated string, if the substring being searched is a different
 * rotation of the string then it will be a substring of the new string. Both
 * strings must be same length.
 * 
 * N = |str1|
 * Time: O(N)
 * Aditional space: O(N)
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
export const isRotation = (s1, s2) => {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;
  const pack = `${s1}${s1}`;
  return pack.includes(s2);
};