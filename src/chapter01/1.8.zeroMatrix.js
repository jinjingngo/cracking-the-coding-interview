/**
 * 1. do a first pass through the matrix to find which cells have 0's. 
 * 2. when a 0 is found then mark that row and column as needing to be zeroed out.
 * 3. on the second pass zero out any cells that to be zeroed out based on the row or column indicators.
 * 
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(M * N)
 * Aditional space: O(M + N)
 * 
 * @param {Array} matrix
 */
export const zeroMatrixOMN = matrix => {
  if (!matrix) throw new Error('invalid matrix');

  if (matrix.length === 0) return matrix;

  const row = [];
  const column = [];

  // Store the row and column index with value 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 0) continue;
      row[i] = true;
      column[j] = true;
    }
  }

  // Nullify rows
  for (let i = 0; i < row.length; i++) {
    if (row[i]) nullifyRow(matrix, i);
  }

  // Nullify columns
  for (let j = 0; j < column.length; j++) {
    if (column[j]) nullifyColumn(matrix, j);
  }
  return matrix;
};

/**
 * We can reduce the space to O(1) by using the first row as replacement for the row array and the first 
 * column as a replacement for the column array. This works as follows:
 * 1. Check if the first row and first column have any zeros,
 *    and set variables `rowHasZero` and `columnHasZero`.
 *    (We'll nullify the first row and first column later, if necessary.)
 * 2. Iterate through the rest of the matrix, setting `matrix[i][0]` and `matrix[0][j]` to zero
 *    whenever there's a zero in `matrix[i][j]`
 * 3. Iterate through rest of matrix, nullifying row `i` if there's a zero in `matrix[i][0]`
 * 4. Iterate through rest of matrix, nullifying column `j` if there's a zero in `matrix[0][j]`.
 * 5. Nullify the first row and first column, if necessary (based on values from step 1).
 * @param {Array} matrix
 * @returns {Array}
 */
export const zeroMatrixO1 = matrix => {
  if (!matrix) throw new Error('invalid matrix');

  if (matrix.length === 0) return matrix;
  
  let rowHasZero = false;
  let columnHasZero = false;

  // Check if first row has a zero
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] !== 0) continue;
    rowHasZero = true;
    break;
  }

  // Check if first column has a zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] !== 0) continue;
    columnHasZero = true;
    break;
  }
  
  // Check for zeros in the rest of the array
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 0) continue;
      matrix[i][0] = 0;
      matrix[0][j] = 0;
    }
  }

  // Nullify rows based on valus in the first column
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] !== 0) continue;
    nullifyRow(matrix, i);
  }

  // Nullify columns based on values in first row
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] !== 0) continue;
    nullifyColumn(matrix, j);
  }

  if (rowHasZero) nullifyRow(matrix, 0);
  if (columnHasZero) nullifyColumn(matrix, 0);
  
  return matrix;
};

const nullifyRow = (matrix, row) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};

const nullifyColumn = (matrix, column) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
};
