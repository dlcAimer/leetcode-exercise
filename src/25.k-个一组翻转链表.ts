/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverse(head: ListNode | null): ListNode | null {
  let pointer = head,
    previousPointer = null;

  while (pointer) {
    let temp = previousPointer;
    previousPointer = pointer;
    pointer = pointer.next;
    previousPointer.next = temp;
  }

  return previousPointer;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k === 1) {
    return head;
  }

  let count = 0;
  let headPointer = head,
    tailPointer = head,
    previousTail: ListNode | null = null,
    result: ListNode | null = null;

  while (tailPointer) {
    const next = tailPointer.next;
    count++;

    if (count === k) {
      // 将当前这段提取出来，进行反转
      tailPointer.next = null;
      const currentTail = headPointer;
      const currentHead = reverse(headPointer);

      if (!result) {
        result = currentHead;
      }

      // 将前一段和这一段链接
      if (previousTail) {
        previousTail.next = currentHead;
      }

      previousTail = currentTail;
      headPointer = next;
      count = 0;
    }

    tailPointer = next;
  }

  // 处理剩余的
  if (count > 0) {
    previousTail.next = headPointer;
  }

  if (result) {
    return result;
  }

  return head;
}
// @lc code=end
