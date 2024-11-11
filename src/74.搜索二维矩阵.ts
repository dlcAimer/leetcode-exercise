/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    const lineCount = matrix.length;

    if (lineCount === 0) {
        return false;
    }

    const columnCount = matrix[0].length;
    let top = 0, bottom = lineCount - 1;

    while (top <= bottom) {
        const lineMiddle = Math.floor((top + bottom) / 2);

        if (target < matrix[lineMiddle][0]) {
            bottom = lineMiddle - 1;
            continue;
        }

        if (target === matrix[lineMiddle][0]) {
            return true;
        }

        let left = 0, right = columnCount - 1;

        while (left <= right) {
            const columnMiddle = Math.floor((left + right) / 2);

            if (target < matrix[lineMiddle][columnMiddle]) {
                right = columnMiddle - 1;
                continue;
            }

            if (target === matrix[lineMiddle][columnMiddle]) {
                return true;
            }

            left = columnMiddle + 1;
        }

        top = lineMiddle + 1
    }

    return false;
};
// @lc code=end

