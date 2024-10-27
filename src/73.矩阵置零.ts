/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const lineCount = matrix.length;

  if (lineCount === 0) {
    return;
  }

  const columnCount = matrix[0].length;

  if (columnCount === 0) {
    return;
  }

  let isFirstLineShouldBeZero = false;
  let isFirstColumnShouldBeZero = false;

  for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
    if (matrix[lineIndex][0] === 0) {
      isFirstColumnShouldBeZero = true;
    }
  }

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    if (matrix[0][columnIndex] === 0) {
      isFirstLineShouldBeZero = true;
    }
  }

  for (let lineIndex = 1; lineIndex < lineCount; lineIndex++) {
    for (let columnIndex = 1; columnIndex < columnCount; columnIndex++) {
      if (matrix[lineIndex][columnIndex] === 0) {
        matrix[lineIndex][0] = 0;
        matrix[0][columnIndex] = 0;
      }
    }
  }

  for (let lineIndex = 1; lineIndex < lineCount; lineIndex++) {
    for (let columnIndex = 1; columnIndex < columnCount; columnIndex++) {
      if (matrix[lineIndex][0] === 0 || matrix[0][columnIndex] === 0) {
        matrix[lineIndex][columnIndex] = 0;
      }
    }
  }

  if (isFirstColumnShouldBeZero) {
    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
      matrix[lineIndex][0] = 0;
    }
  }

  if (isFirstLineShouldBeZero) {
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      matrix[0][columnIndex] = 0;
    }
  }
}
// @lc code=end
