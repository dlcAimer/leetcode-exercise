/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const numsCount = nums.length;
  let sum = 0;
  let result = -Infinity;

  for (let index = 0; index < numsCount; index++) {
    sum += nums[index];

    if (sum > result) {
      result = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return result;
}
// @lc code=end
