/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const stringLength = s.length;
  const MAX_LIMIT = Math.pow(2, 31) - 1;
  const MIN_LIMIT = -Math.pow(2, 31);
  let isNumberStart = false;
  let isActive = true;
  let result = 0;

  for (let position = 0; position < stringLength; position++) {
    const char = s[position];

    if (!isNumberStart) {
      if (char === ' ') {
        continue;
      }

      if (char === '-') {
        isActive = false;
        isNumberStart = true;
        continue;
      }

      if (char === '+') {
        isNumberStart = true;
        continue;
      }

      if (char >= '0' && char <= '9') {
        isNumberStart = true;
        result = result * 10 + Number(char);
        continue;
      }

      return 0;
    }

    if (char >= '0' && char <= '9') {
      result = result * 10 + Number(char);
    } else {
      break;
    }

    if (isActive && result > MAX_LIMIT) {
      return MAX_LIMIT;
    }

    if (!isActive && result > -MIN_LIMIT) {
      return MIN_LIMIT;
    }
  }

  return isActive ? result : -result;
}
// @lc code=end
