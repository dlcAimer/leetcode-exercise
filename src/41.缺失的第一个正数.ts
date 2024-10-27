/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * 对于长度为 N 的数组，能涵盖的正整数最大范围是[1, N]，那么未出现的正整数的最大值是N+1，
 * 因此未出现的正整数取值范围是[1, N+1]
 *
 * 我们只能使用常数据别的额外空间，但是我们需要记录出现过的正整数，那么我们只能使用原本数组去实现哈希表的功能
 * 1. 负数和0我们不关心
 * 2. 大于 N 的数我们不关心
 * 3. 对于[1, N]区间内的数k，我们将nums[k]的数打上标记，表示k出现过
 *
 * 如果我们想要对于数打上标记，我们需要一个函数f(x)，函数的结果不能影响整个过程，也就是不能将x映射到[1, N]内。
 * 并且复杂度为O(n)，正常来说我们是从前往后顺序便利，后续遍历到这个被映射过的值的时候需要能逆向映射回原本的值，也就是映射需要是一一映射。
 * 本身这是个整数数组，如果映射到整数，无法得知是本身就是这个数还是被映射成这个数，因此最好映射到非整数。
 *
 * 但是映射到非整数再还原会有精度问题，以及如何将整数全部映射到非整数比较难构造，我们换种思路。
 * 负数和0我们不关心，那我们可以直接先遍历一边将负数和0都改为N+1，
 * 然后再遍历一次，映射采取取负数
 */
function firstMissingPositive(nums: number[]): number {
  const numsCount = nums.length;

  // 现在只有正整数
  for (let index = 0; index < numsCount; index++) {
    while (
      nums[index] > 0 &&
      nums[index] <= numsCount &&
      nums[nums[index] - 1] !== nums[index]
    ) {
      let temp = nums[index];
      const targetIndex = nums[index] - 1;
      nums[index] = nums[targetIndex];
      nums[targetIndex] = temp;
    }
  }

  // 寻找第一个没有被标记的位置
  for (let index = 0; index < numsCount; index++) {
    if (nums[index] !== index + 1) {
      return index + 1;
    }
  }

  // 都被标记了，那就是 N + 1
  return numsCount + 1;
}
// @lc code=end
