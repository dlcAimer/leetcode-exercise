/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, middle = -1;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
};
// @lc code=end

