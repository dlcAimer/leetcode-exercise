/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const lineCount = matrix.length;

  /**
   * matrix[line][column] -> matrix[column][lineCount - 1 - line]
   * matrix[column][lineCount - 1 - line] -> matrix[lineCount - 1 - line][lineCount - 1 - column]
   * matrix[lineCount - 1 - line][lineCount - 1 - column] -> matrix[lineCount - 1 - column][line]
   * matrix[lineCount - 1 - column][line] -> matrix[line][column]
   */
  for (let line = 0; line < Math.floor(lineCount / 2); line++) {
    for (let column = 0; column < Math.ceil(lineCount / 2); column++) {
      const temp = matrix[line][column];
      matrix[line][column] = matrix[lineCount - 1 - column][line];
      matrix[lineCount - 1 - column][line] =
        matrix[lineCount - 1 - line][lineCount - 1 - column];
      matrix[lineCount - 1 - line][lineCount - 1 - column] =
        matrix[column][lineCount - 1 - line];
      matrix[column][lineCount - 1 - line] = temp;
    }
  }
}
// @lc code=end
