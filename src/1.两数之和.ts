/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
const twoSum = (nums: number[], target: number): number[] => {
  const map: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const result = map[target - num];

    if (typeof result === "number") {
      return [result, i];
    }

    map[num] = i;
  }

  return [];
};
// @lc code=end
