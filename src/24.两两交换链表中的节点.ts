/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const result = head.next;
  let pointer = head;
  let previous = new ListNode(-1);
  previous.next = head;

  while (pointer && pointer.next) {
    let temp1 = pointer.next;
    // 维护和后面节点的关系
    pointer.next = pointer.next.next;
    // 反转
    temp1.next = pointer;
    // 维护和前面节点的关系
    previous.next = temp1;
    previous = previous.next.next;
    // 向后移动
    pointer = pointer.next;
  }

  return result;
};
// @lc code=end

