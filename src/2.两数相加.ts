/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let tail = null;
  let header = null;
  let carry = 0;

  while (l1 || l2) {
    const total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(total / 10);

    if (!header) {
      header = new ListNode(total % 10);
      tail = header;
    } else {
      tail.next = new ListNode(total % 10);
      tail = tail.next;
    }

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  return header;
};

const addTwoNumbers1 = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let l1Previous = null;
  let l1Current = l1;
  let l2Current = l2;
  let carry = 0;
  const result = l1Current;

  while (l1Current) {
    if (!l2Current) {
      break;
    }

    const total = l1Current.val + l2Current.val + carry;
    carry = Math.floor(total / 10);
    l1Current.val = total % 10;
    l1Previous = l1Current;
    l1Current = l1Current.next;
    l2Current = l2Current.next;
  }

  if (l2Current) {
    // l1Current 遍历完
    l1Previous.next = l2Current;
    l1Current = l2Current;
  }

  while (carry > 0) {
    if (l1Current) {
      const total = l1Current.val + carry;
      carry = Math.floor(total / 10);
      l1Current.val = total % 10;
      l1Previous = l1Current;
      l1Current = l1Current.next;
    } else {
      l1Current = new ListNode(carry);
      l1Previous.next = l1Current;
      carry = 0;
    }
  }

  return result;
};
// @lc code=end
