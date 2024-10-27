/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let resultList: ListNode | null = null;
  let resultHead: ListNode | null = null;

  if (list1.val > list2.val) {
    resultList = list2;
    list2 = list2.next;
  } else {
    resultList = list1;
    list1 = list1.next;
  }
  resultHead = resultList;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      resultList.next = list2;
      resultList = resultList.next;
      list2 = list2.next;
    } else {
      resultList.next = list1;
      resultList = resultList.next;
      list1 = list1.next;
    }
  }

  if (list1 === null) {
    resultList.next = list2;
  }

  if (list2 === null) {
    resultList.next = list1;
  }

  return resultHead;
}
// @lc code=end
