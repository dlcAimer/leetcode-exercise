/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 获取最大公约数
 * 数学上求最大公约数的方法是“辗转相除法”，就是用一个数除以另一个数（不需要知道大小），
 * 取余数，再用被除数除以余数再取余，再用新的被除数除以新的余数再取余，直到余数为0，最后的被除数就是最大公约数
 */
function getGreatestCommonDivisor(n: number, m: number) {
  if (m == 0) {
    return n;
  }

  return getGreatestCommonDivisor(m, n % m);
}

function rotate(nums: number[], k: number): void {
  const numsCount = nums.length;

  if (k === 0 || numsCount === 0) {
    return;
  }

  /**
   * 需要重复几次变换会回到原地 = k 和 numsCount 的最小公倍数 / k
   * （需要重复几次变换会回到原地）也就是这次过程完成变换的数值个数
   * 需要经历几次回到原地的变换流程 = numsCount / 需要重复几次变换会回到原地
   *                           = numsCount * k / k 和 numsCount 的最小公倍数
   *                           = k 和 numsCount 的最大公因数
   */
  const step = k % numsCount;
  const totalCount = getGreatestCommonDivisor(numsCount, step);

  for (let count = 0; count < totalCount; count++) {
    let index = count;
    let temp = nums[index];

    do {
      const targetIndex = (index + step) % numsCount;
      let antherTemp = temp;
      temp = nums[targetIndex];
      nums[targetIndex] = antherTemp;
      index = targetIndex;
    } while (index !== count);
  }
}
// @lc code=end
