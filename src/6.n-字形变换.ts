/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const totalCount = s.length;
  const groupSize = 2 * numRows - 2;
  const groupCount = Math.ceil(totalCount / groupSize);
  let result = '';

  for (let line = 0; line < numRows; line++) {
    for (let group = 0; group < groupCount; group++) {
      if (line === 0) {
        result += s[group * groupSize];
        continue;
      }

      if (line === numRows - 1) {
        const index = group * groupSize + numRows - 1;
        if (index < totalCount) {
          result += s[index];
        }
        continue;
      }

      const index1 = group * groupSize + line;
      const index2 = group * groupSize + groupSize - line;

      if (index1 < totalCount) {
        result += s[index1];
      }

      if (index2 < totalCount) {
        result += s[index2];
      }
    }
  }

  return result;
};
// @lc code=end

