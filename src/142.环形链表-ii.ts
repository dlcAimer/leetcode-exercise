/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }

  let slowPointer = head, fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (fastPointer === null || fastPointer.next === null) {
      // 只需要判断快指针是否到尾部
      return null;
    }

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let newPointer = head;
  slowPointer = slowPointer.next;

  while (newPointer !== slowPointer) {
    newPointer = newPointer.next;
    slowPointer = slowPointer.next;
  }

  return newPointer;
};
// @lc code=end

