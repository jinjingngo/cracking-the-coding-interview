/**
 * 1. Go through the matrix and swap [i][j] with [j][i]
 * 2. Go through the matrix and using the two pointer strategy to swap [i][j] with [i][length - i - j]
 * 
 * N = dimension of matrix
 * Time: O(N^2)
 * Additional space: O(1)
 * @param {array<array>} matrix 
 * @returns {array<array>} matrix 
 */
export const rotateMatrix2Pointer = (matrix) => {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('Not a perfect matrix');
  }
  if (matrix.length < 2) return matrix;
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  const half = Math.floor(matrix.length / 2);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < half; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][length - 1 - j];
      matrix[i][length - 1 - j] = temp;
    }
  }

  return matrix;
};
