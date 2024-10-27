/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  const listLength = height.length;

  if (listLength < 2) {
    return 0;
  }

  let maxArea = 0;
  let leftIndex = 0, rightIndex = listLength - 1;

  while (leftIndex !== rightIndex) {
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];
    const currentHeight = Math.min(leftHeight, rightHeight) * (rightIndex - leftIndex);
  
    if (currentHeight > maxArea) {
      maxArea = currentHeight;
    }
  
    if (leftHeight > rightHeight) {
      rightIndex -= 1;
    } else {
      leftIndex += 1;
    }
  }

  return maxArea;
}
// @lc code=end
