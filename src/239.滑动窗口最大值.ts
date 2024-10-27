/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function peek<T>(array: T[]) {
  return array[array.length - 1];
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const numsCount = nums.length;

  if (k > numsCount) {
    return [];
  }

  if (k === 1) {
    return nums;
  }

  // 单调递增的下标数组，但是对应的数值数组是单调递减的
  const indexQueue: number[] = [];
  const result: number[] = [];

  for (let index = 0; index < numsCount; index++) {
    while (indexQueue.length > 0 && nums[index] >= nums[peek(indexQueue)]) {
      indexQueue.pop();
    }
    indexQueue.push(index);
    // 去除 indexQueue 中不在窗口内的值
    while (index > indexQueue[0] + k - 1) {
      indexQueue.shift();
    }

    if (index >= k - 1) {
      result.push(nums[indexQueue[0]]);
    }
  }

  return result;
}
// @lc code=end
