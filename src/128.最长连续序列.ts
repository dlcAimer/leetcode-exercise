/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let maxCount = 0;
  const set = new Set(nums);
  
  for (const num of set) {
    // 从 num 往后找
    if (set.has(num - 1)) {
      // 如果 set 存在比 num - 1，那么从 num - 1 往后找一定比从 num 开始多一个数
      continue;
    }

    let currentMaxCount = 1;
    let currentNum = num;

    while (set.has(currentNum + 1)) {
      currentNum += 1;
      currentMaxCount += 1;
    }

    if (currentMaxCount > maxCount) {
      maxCount = currentMaxCount;
    }
  }

  return maxCount;
}
// @lc code=end
