/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const numCount = nums.length;

  if (numCount < 3) {
    return [];
  }

  // O(nlogn) 排序，注意当不传入比较函数时，sort() 方法会根据字符串的 Unicode 码点顺序对数组元素进行排序。
  const sortedList = nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // i < j < k
  for (let i = 0; i < numCount; i++) {
    if (sortedList[i] > 0) {
      // 因为已经排序，所以在 i 之后的 j 和 k 一定不会让 sortedList[j] + sortedList[k] < 0
      break;
    }

    if (sortedList[i] === sortedList[i - 1]) {
      // 相同的值直接跳过
      continue;
    }

    let k = numCount - 1;
    for (let j = i + 1; j < numCount; j++) {
      if (sortedList[i] + sortedList[j] > 0) {
        // 因为已经排序，所以不会存在更大 k 能让 sortedList[k] < 0
        break;
      }

      if (j > i + 1 && sortedList[j] === sortedList[j - 1]) {
        // 非初始值，相同的值直接跳过
        continue;
      }

      /**
       * sortedList[i] + sortedList[j] 确定了唯一 sortedList[k]
       * 因为 j 的循环会导致 sortedList[j + 1] > sortedList[j]，
       * 所以 j 的增加必然需要 k 的减少，让 sortedList[k - x] < sortedList[k],
       * 才能使 sortedList[j + 1] + sortedList[k - x] === sortedList[j] + sortedList[k]
       */
      while (sortedList[i] + sortedList[j] + sortedList[k] > 0) {
        k -= 1;

        if (k <= j) {
          // 找不到一个大于 j 的 k 使 sortedList[i] + sortedList[j] + sortedList[k] <= 0，那么 j + x 就更不可能
          break;
        }
      }

      if (k <= j) {
        break;
      }

      if (sortedList[i] + sortedList[j] + sortedList[k] === 0) {
        result.push([sortedList[i], sortedList[j], sortedList[k]]);
      }
    }
  }

  return result;
};
// @lc code=end

