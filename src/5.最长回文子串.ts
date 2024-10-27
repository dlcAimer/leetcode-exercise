/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string) {
  const stringLength = s.length;

  if (!s || stringLength < 1) {
    return s;
  }

  let maxLength = 0;
  let start = 0, end = 0;

  for (let cursor = 0; cursor < stringLength; cursor++) {
    const length1 = checkCenter(s, cursor, cursor);
    const length2 = checkCenter(s, cursor, cursor + 1);
    const length = Math.max(length1, length2);

    if (length > maxLength) {
      maxLength = length;
      start = cursor - Math.floor((length - 1) / 2);
      end = cursor + Math.floor(length / 2);
    }
  }

  return s.substring(start, end + 1);
}

function checkCenter (s: string, left: number, right: number) {
  const stringLength = s.length;
  let leftCursor = left;
  let rightCursor = right;

  while (leftCursor >= 0 && rightCursor <= stringLength && s[leftCursor] === s[rightCursor]) {
    leftCursor--;
    rightCursor++;
  }

  // 循环中断时左右指针不是回文，所以需要减去左右指针的两个长度 rightCursor - leftCursor + 1 - 2
  return rightCursor - leftCursor - 1;
}
// @lc code=end
