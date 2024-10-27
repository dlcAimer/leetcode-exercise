/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let start = -1;
  const totalCount = nums.length;

  for (let index = 0; index < totalCount; index++) {
    if (nums[index] === 0) {
      if (start < 0) {
        start = index;
      }
    } else {
      if (start >= 0) {
        nums[start] = nums[start] ^ nums[index];
        nums[index] = nums[start] ^ nums[index];
        nums[start] = nums[start] ^ nums[index];
        start = start + 1;
      }
    }
  }
}
// @lc code=end
