/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    const numsCount = nums.length;

    if (numsCount === 0) {
        return -1;
    }

    let left = 0, right = numsCount - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[left] < nums[middle]) {
            // 有序
            if (target === nums[left]) {
                return left;
            }

            if (target === nums[middle]) {
                return middle;
            }

            if (target > nums[left] && target < nums[middle]) {
                right = middle - 1;
            } else {
                // 在右侧
                left = middle + 1;
            }

            continue;
        }

        // 左侧无序，那么右侧必定有序
        if (target === nums[right]) {
            return right;
        }

        if (target === nums[middle]) {
            return middle;
        }

        if (target < nums[right] && target > nums[middle]) {
            left = middle + 1;
        } else {
            // 在左侧
            right = middle - 1;
        }
    }

    return -1;
};
// @lc code=end

