/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const resultSet: Map<string, string[]> = new Map();
  const baseCode = 'A'.charCodeAt(0);
  const maxCode = 'z'.charCodeAt(0);

  for (const str of strs) {
    const countList = new Array<number>(maxCode - baseCode + 1).fill(0);

    for (const char of str) {
      countList[char.charCodeAt(0) - baseCode] += 1;
    }

    const key = countList.join();

    if (resultSet.has(key)) {
      resultSet.get(key).push(str);
    } else {
      resultSet.set(key, [str]);
    }
  }

  return [...resultSet.values()];
};
// @lc code=end

