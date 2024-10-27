/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const length = s.length;
  const sourceLength = p.length;

  if (length < sourceLength) {
    return [];
  }

  const result = [];
  const charMap = new Map();
  
  for (let i = 0; i < sourceLength; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
    charMap.set(p[i], (charMap.get(p[i]) || 0) - 1);
  }

  let difference = 0;

  for (const [, value] of charMap) {
    if (value !== 0) {
      difference++;
    }
  }

  if (difference === 0) {
    result.push(0);
  }

  for (let i = 0; i < length - sourceLength; i++) {
    const currentDiff = charMap.get(s[i]) || 0;
    if (currentDiff === 1) {
      // s[i] 对应的字符数量从不相同变成相同
      difference--;
    } else if (currentDiff === 0) {
      // s[i] 对应的字符数量从相同变成不相同
      difference++;
    }
    charMap.set(s[i], currentDiff - 1);

    // 窗口长度为 sourceLength
    const nextDiff = charMap.get(s[i + sourceLength]) || 0;
    if (nextDiff === -1) {
      // s[i + sourceLength] 对应的字符数量从不相同变成相同
      difference--;
    } else if (nextDiff === 0) {
      // s[i + sourceLength] 对应的字符数量从相同变成不相同
      difference++;
    }
    charMap.set(s[i + sourceLength], nextDiff + 1);

    if (difference === 0) {
      // 这里计算的是移动后的 difference，因此对应位置是 i + 1
      result.push(i + 1);
    }
  }

  return result;
}
// @lc code=end
