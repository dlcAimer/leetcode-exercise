/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const lineCount = matrix.length;
  const columnCount = matrix[0].length;
  let x = columnCount - 1,
    y = 0;

  while (x >= 0 && y <= lineCount - 1) {
    const current = matrix[y][x];

    if (current === target) {
      return true;
    }

    if (current > target) {
      x--;
    } else {
      y++;
    }
  }

  return false;
}
// @lc code=end
