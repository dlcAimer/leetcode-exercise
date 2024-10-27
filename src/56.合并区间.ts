/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const intervalCount = intervals.length;
  const sortedList = intervals.sort(
    (intervalA, intervalB) => intervalA[0] - intervalB[0]
  );
  const result = [];

  for (let index = 0; index < intervalCount; index++) {
    const resultCount = result.length;

    if (resultCount === 0) {
      result.push(sortedList[index]);
      continue;
    }

    const previousInterval = result[resultCount - 1];

    if (previousInterval[1] >= sortedList[index][0]) {
      previousInterval[1] = Math.max(previousInterval[1], sortedList[index][1]);
    } else {
      result.push(sortedList[index]);
    }
  }

  return result;
}
// @lc code=end
