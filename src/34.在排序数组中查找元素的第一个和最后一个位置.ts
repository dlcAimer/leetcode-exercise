/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    const numsCount = nums.length;

    if (numsCount === 0) {
        return [-1, -1];
    }

    let left = 0, right = numsCount - 1, firstFind = -1, resultLeft = -1, resultRight = -1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            firstFind = middle;
            break;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (firstFind < 0) {
        return [resultLeft, resultRight];
    }

    let firstFindCopy = firstFind, returnValue = -1;

    while (left <= firstFindCopy) {
        const middle = Math.floor((left + firstFindCopy) / 2);

        if (nums[middle] === target) {
            returnValue = middle;
            firstFindCopy = middle - 1;
        } else {
            // 因为非递减，所以不可能大于 target
            left = middle + 1;
        }
    }

    if (nums[firstFindCopy] === target) {
        resultLeft = firstFindCopy;
    } else {
        resultLeft = returnValue;
    }
    firstFindCopy = firstFind;
    returnValue = -1;

    while (right >= firstFindCopy) {
        const middle = Math.floor((right + firstFindCopy) / 2);

        if (nums[middle] === target) {
            returnValue = middle;
            firstFindCopy = middle + 1;
        } else {
            // 因为非递减，所以不可能小于 target
            right = middle - 1;
        }
    }

    if (nums[firstFindCopy] === target) {
        resultRight = firstFindCopy;
    } else {
        resultRight = returnValue;
    }
    return [resultLeft, resultRight];
};
// @lc code=end

