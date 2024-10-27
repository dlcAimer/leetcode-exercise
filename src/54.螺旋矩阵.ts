/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const lineCount = matrix.length;
  const columnCount = matrix[0].length;
  const result: number[] = [];

  let lineStart = 0,
    lineEnd = lineCount - 1,
    columnStart = 0,
    columnEnd = columnCount - 1;

  while (lineStart <= lineEnd && columnStart <= columnEnd) {
    for (let index = columnStart; index <= columnEnd; index++) {
      result.push(matrix[lineStart][index]);
    }

    for (let index = lineStart + 1; index <= lineEnd; index++) {
      result.push(matrix[index][columnEnd]);
    }

    if (lineEnd > lineStart) {
      // 需要返回
      for (let index = columnEnd - 1; index >= columnStart; index--) {
        result.push(matrix[lineEnd][index]);
      }
    }

    if (columnEnd > columnStart) {
      // 需要返回
      for (let index = lineEnd - 1; index >= lineStart + 1; index--) {
        result.push(matrix[index][columnStart]);
      }
    }

    lineStart++;
    lineEnd--;
    columnStart++;
    columnEnd--;
  }

  return result;
}
// @lc code=end
