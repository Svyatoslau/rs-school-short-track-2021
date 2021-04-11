/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let Number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (Number.isInteger(matrix[i][k]) && matrix[i][k] !== 0) {
        for (let p = i + 1; p < matrix[i].length; p++) {
          if (matrix[p][k] === 0) {
            Number += matrix[i][k];
            break;
          }
        }
      }
    }
  }
  return Number;
}

module.exports = getMatrixElementsSum;
