/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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

class MyQueue {
  private _queue: ListNode[] = [];

  push = (node: ListNode) => {
    const nodeCount = this._queue.length;

    for (let index = 0; index < nodeCount; index++) {
      if (node.val < this._queue[index].val) {
        this._queue.splice(index, 0, node);
        return;
      }
    }

    this._queue.push(node);
  };

  pop = () => {
    return this._queue.shift();
  };

  isEmpty = () => {
    return this._queue.length === 0;
  };
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const result = new ListNode();
  const listItemCount = lists?.length;
  const queue = new MyQueue();
  let pointer = result;

  for (let index = 0; index < listItemCount; index++) {
    if (lists[index]) {
      queue.push(lists[index]);
    }
  }

  while (!queue.isEmpty()) {
    const smallestNode = queue.pop();

    if (smallestNode) {
      pointer.next = smallestNode;
      pointer = pointer.next;

      if (smallestNode.next) {
        queue.push(smallestNode.next);
      }
    }
  }

  return result.next;
}
// @lc code=end
