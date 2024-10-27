/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  const stack: number[] = [];
  let helpPointer = head;

  while (helpPointer) {
    stack.push(helpPointer.val);
    helpPointer = helpPointer.next;
  }
  
  while (head) {
    if (head.val != stack.pop()) {
      return false;
    }

    head = head.next;
  }

  return true;
};
// @lc code=end

