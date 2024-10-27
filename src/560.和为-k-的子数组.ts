/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  if (!Array.isArray(nums) || nums.length < 1) {
    return 0;
  }

  /**
   * 我们定义 index 从 0 到 i 的数字和为 sum[0,i]
   * 若存在 0 <= j < i <= nums.length，j 到 i 是和为 k 的子数组，即 sum[j,i] = k
   * 我们可以推出 sum[0,i] - sum[0,j] = k
   * 从前向后遍历，能复用前面的信息，因此 sum[0,j] 已知，sum[0,i] = sum[0,i - 1] + nums[i]
   * 因此只需要存在 sum[0,j] 使得 sum[0,i] = k + sum[0,j] 即可
   */
  const numsCount = nums.length;
  // <指定前缀和, 目前达成这个前缀和的次数>
  const sumMap = new Map<number, number>();
  // 初始化时将 <0, 1> 塞入
  sumMap.set(0, 1);
  let result = 0;
  let sum = 0;

  for (let index = 0; index < numsCount; index++) {
    sum += nums[index];

    if (sumMap.has(sum - k)) {
      result += sumMap.get(sum - k);
    }

    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
  }

  return result;
}
// @lc code=end
