/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const numsCount = nums.length;
  const productList: number[] = new Array(numsCount);

  let prefix = 1,
    suffix = 1;
  for (let index = 0; index < numsCount; index++) {
    // 前缀
    productList[index] = (productList[index] ?? 1) * prefix;
    prefix *= nums[index];
    // 后缀
    productList[numsCount - index - 1] =
      (productList[numsCount - index - 1] ?? 1) * suffix;
    suffix *= nums[numsCount - index - 1];
  }

  return productList;
}
// @lc code=end
