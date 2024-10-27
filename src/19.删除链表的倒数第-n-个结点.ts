/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  const fakeHead = new ListNode(-1);
  fakeHead.next = head;
  let pointer = fakeHead, nthForwardPointer = fakeHead;

  for (let index = 0; index <= n; index++) {
    if (nthForwardPointer) {
      nthForwardPointer = nthForwardPointer.next;
    } else {
      return head;
    }
  }

  while (nthForwardPointer) {
    nthForwardPointer = nthForwardPointer.next;
    pointer = pointer.next;
  }

  pointer.next = pointer.next.next;

  return fakeHead.next;
}
// @lc code=end
