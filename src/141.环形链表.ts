/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let slowPointer = head, fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (fastPointer === null || fastPointer.next === null) {
      // 只需要判断快指针是否到尾部
      return false;
    }

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return true;
};
// @lc code=end

