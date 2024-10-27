/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function method1(s: string): number {
  const length = s.length;
  let result = length > 0 ? 1 : 0;
  let windowLeft = 0;
  let windowRight = 0;
  const map = new Map<string, number>();

  while (windowRight < length) {
    const currentChar = s[windowRight];

    if (windowLeft === windowRight) {
      map.set(currentChar, windowRight);
      windowRight++;
      continue;
    }

    if (map.has(currentChar)) {
      result = Math.max(windowRight - windowLeft, result);
      const repeatIndex = map.get(currentChar);

      if (repeatIndex >= windowLeft) {
        windowLeft = repeatIndex + 1;
      }
        
      map.set(currentChar, windowRight);
      windowRight++;
      continue;
    }

    map.set(currentChar, windowRight);
    windowRight++;
  }

  return Math.max(windowRight - windowLeft, result);
}

function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  const map = new Map<string, number>();

  while (right < s.length) {
    const char = s[right];

    if (map.has(char)) {
      left = Math.max(map.get(char) + 1, left);
    }

    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};
// @lc code=end

