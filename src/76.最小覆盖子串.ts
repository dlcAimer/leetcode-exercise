/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const sourceLength = s.length;
  const targetLength = t.length;

  if (targetLength > sourceLength) {
    return '';
  }

  /**
   * 字符 -> 出现数量
   */
  const map = new Map<string, number>();

  // 初始化
  for (let index = 0; index < targetLength; index++) {
    const count = map.get(t[index]);

    if (count) {
      map.set(t[index], count + 1);
    } else {
      map.set(t[index], 1);
    }
  }

  let totalCount = targetLength;
  let minSize = Infinity;
  let startIndex = -Infinity;
  let endIndex = Infinity;

  for (
    let windowLeftIndex = 0, windowRightIndex = 0;
    windowRightIndex < sourceLength;
    windowRightIndex++
  ) {
    // windowRightIndex 右移扩大窗口
    const count = map.get(s[windowRightIndex]);

    if (typeof count !== 'number') {
      continue;
    }

    if (count <= 0) {
      // s[index] 对应的字符已经足够
      map.set(s[windowRightIndex], count - 1);
      continue;
    }

    totalCount -= 1;
    map.set(s[windowRightIndex], count - 1);

    if (totalCount === 0) {
      // 满足条件，这时表内所有项 count 均为 0
      while (totalCount === 0) {
        const count = map.get(s[windowLeftIndex]);

        if (typeof count === 'number') {
          if (count >= 0) {
            totalCount++;
          }

          // windowLeftIndex 右移缩小窗口
          map.set(s[windowLeftIndex], count + 1);
          windowLeftIndex++;
        } else {
          windowLeftIndex++;
        }
      }

      const size = windowRightIndex - (windowLeftIndex - 1) + 1;

      if (minSize > size) {
        minSize = size;
        startIndex = windowLeftIndex - 1;
        endIndex = windowRightIndex;
      }
    }
  }

  if (isFinite(minSize)) {
    return s.slice(startIndex, endIndex + 1);
  }

  return '';
}
// @lc code=end
