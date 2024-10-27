/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
/** 动态规划 */
function method1(height: number[]): number {
  const count = height.length;

  if (count < 3) {
    return 0;
  }

  let result = 0;
  let leftToRightMaxHeight = 0;
  const leftToRightMaxHeightList: number[] = [];

  for (let i = 0; i < count; i++) {
    const currentHeight = height[i];
    leftToRightMaxHeight = Math.max(currentHeight, leftToRightMaxHeight);
    leftToRightMaxHeightList[i] = leftToRightMaxHeight - currentHeight;
  }

  let rightToLeftMaxHeight = 0;
  const rightToLeftMaxHeightList: number[] = [];

  for (let i = count - 1; i >= 0; i--) {
    const currentHeight = height[i];
    rightToLeftMaxHeight = Math.max(currentHeight, rightToLeftMaxHeight);
    rightToLeftMaxHeightList[i] = rightToLeftMaxHeight - currentHeight;
  }

  for (let i = 0; i < count; i++) {
    result += Math.min(
      leftToRightMaxHeightList[i],
      rightToLeftMaxHeightList[i]
    );
  }

  return result;
}

/** 动态规划改良版 */
function method1_v2(height: number[]): number {
  const count = height.length;

  if (count < 3) {
    return 0;
  }

  let result = 0;
  let leftToRightMaxHeight = 0;
  let rightToLeftMaxHeight = 0;
  const leftToRightMaxHeightList: number[] = [];
  const rightToLeftMaxHeightList: number[] = [];

  for (let leftIndex = 0; leftIndex < count; leftIndex++) {
    const rightIndex = count - 1 - leftIndex;
    const currentLeftHeight = height[leftIndex];
    leftToRightMaxHeight = Math.max(currentLeftHeight, leftToRightMaxHeight);
    const currentRightHeight = height[rightIndex];
    rightToLeftMaxHeight = Math.max(currentRightHeight, rightToLeftMaxHeight);

    if (leftIndex < rightIndex) {
      leftToRightMaxHeightList[leftIndex] =
        leftToRightMaxHeight - currentLeftHeight;
      rightToLeftMaxHeightList[rightIndex] =
        rightToLeftMaxHeight - currentRightHeight;
    } else if (leftIndex === rightIndex) {
      result += Math.min(
        leftToRightMaxHeight - height[leftIndex],
        rightToLeftMaxHeight - height[rightIndex]
      );
    } else {
      result += Math.min(
        leftToRightMaxHeight - height[leftIndex],
        rightToLeftMaxHeightList[leftIndex]
      );
      result += Math.min(
        rightToLeftMaxHeight - height[rightIndex],
        leftToRightMaxHeightList[rightIndex]
      );
    }
  }

  return result;
}

/** 单调栈 */
function method2(height: number[]): number {
  const count = height.length;

  if (count < 3) {
    return 0;
  }

  let result = 0;
  const stack = [];

  for (let i = 0; i < count; i++) {
    // 单调递减栈
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      // 由于当前的高度比栈顶的高度高，且栈是递减栈，那么如果栈内有两个及以上的元素，就至少会有一个可以接水的区域
      const currentHeight = height[stack.pop()];
      if (stack.length === 0) {
        // 仅有一个元素
        break;
      }
      const currentLeftIndex = stack[stack.length - 1];
      const areaWidth = i - currentLeftIndex - 1;
      const areaHeight =
        Math.min(height[i], height[currentLeftIndex]) - currentHeight;
      result += areaWidth * areaHeight;
    }

    stack.push(i);
  }

  return result;
}

/** 双指针 */
function trap(height: number[]): number {
  const count = height.length;

  if (count < 3) {
    return 0;
  }

  let result = 0;
  let leftToRightMaxHeight = 0;
  let rightToLeftMaxHeight = 0;
  let leftIndex = 0;
  let rightIndex = count - 1;

  /**
   * 对于左指针，必须要从右到左的最大值比当前位置的高度大，才会往右走去寻找更大的值，
   * 那也就是说如果指针没有移动了，就代表着当前另一侧的最大值都比当前的小，也就是说两指针只在最高点相遇
   */
  while (leftIndex < rightIndex) {
    leftToRightMaxHeight = Math.max(height[leftIndex], leftToRightMaxHeight);
    rightToLeftMaxHeight = Math.max(height[rightIndex], rightToLeftMaxHeight);
    // 每个位置的盛水量等于 Math.min(从左到右的最大值, 从右到左的最大值) - 当前位置高度
    if (leftToRightMaxHeight < rightToLeftMaxHeight) {
      // leftIndex 处 Math.min(从左到右的最大值, 从右到左的最大值) 取值一定是从左到右的最大值
      result += leftToRightMaxHeight - height[leftIndex];
      leftIndex ++;
    } else {
      // rightIndex 处 Math.min(从左到右的最大值, 从右到左的最大值) 取值一定是从右到左的最大值
      result += rightToLeftMaxHeight - height[rightIndex];
      rightIndex--;
    }
  }

  return result;
}
// @lc code=end
