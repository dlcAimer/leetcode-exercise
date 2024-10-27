/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isOdd = totalLength % 2 === 1;

  if (isOdd) {
    return findKthItemInTwoArrays(Math.floor(totalLength / 2) + 1, nums1, nums2);
  } else {
    return (
      (findKthItemInTwoArrays(Math.floor(totalLength / 2), nums1, nums2) +
        findKthItemInTwoArrays(Math.floor(totalLength / 2) + 1, nums1, nums2)) /
      2
    );
  }
}

function findKthItemInTwoArrays(kth, array1, array2) {
  /**
   * Math.floor(kth / 2) - 1 < kth / 2
   * 1. array1[Math.floor(kth / 2) - 1] < array2[Math.floor(kth / 2) - 1]，
   *    则 array1[Math.floor(kth / 2) - 1] 至多是第 Math.floor(kth / 2) + Math.floor(kth / 2) - 1 <= kth - 1 小的数，
   *    array1 的前 Math.floor(kth / 2) 个数都不可能是第 kth 小的数，均可排除
   * 2. array1[Math.floor(kth / 2) - 1] > array2[Math.floor(kth / 2) - 1]，
   *    则 array2[Math.floor(kth / 2) - 1] 至多是第 Math.floor(kth / 2) + Math.floor(kth / 2) - 1 <= kth - 1 小的数，
   *    array2 的前 Math.floor(kth / 2) 个数都不可能是第 kth 小的数，均可排除
   * 3. array1[Math.floor(kth / 2) - 1] = array2[Math.floor(kth / 2) - 1]，
   *    则并入上述两种情况之一，任意排除 array1/array2 的前 Math.floor(kth / 2) 个数都可
   */

  const array1Length = array1.length;
  const array2Length = array2.length;
  let targetKth = kth;
  let baseIndex1 = 0,
    baseIndex2 = 0;

  while (true) {
    if (baseIndex1 === array1Length) {
      // 到达 array1 尾部，直接返回 array2 的第 targetKth 个数
      return array2[baseIndex2 + targetKth - 1];
    }

    if (baseIndex2 === array2Length) {
      // 到达 array2 尾部，直接返回 array1 的第 targetKth 个数
      return array1[baseIndex1 + targetKth - 1];
    }

    if (targetKth === 1) {
      // 只剩下一个数，直接返回两个数组当前位置的最小值
      return Math.min(array1[baseIndex1], array2[baseIndex2]);
    }

    const bias = Math.floor(targetKth / 2);
    // 防止越界
    const targetIndex1 = Math.min(baseIndex1 + bias, array1Length) - 1;
    const targetIndex2 = Math.min(baseIndex2 + bias, array2Length) - 1;
    const array1Target = array1[targetIndex1];
    const array2Target = array2[targetIndex2];

    if (array1Target <= array2Target) {
      // 丢弃 array1 的前 targetIndex1 - baseIndex1 + 1 个数
      targetKth -= targetIndex1 - baseIndex1 + 1;
      baseIndex1 = targetIndex1 + 1;
    } else {
      // 丢弃 array2 的前 targetIndex2 - baseIndex2 + 1 个数
      targetKth -= targetIndex2 - baseIndex2 + 1;
      baseIndex2 = targetIndex2 + 1;
    }
  }
}
// @lc code=end
