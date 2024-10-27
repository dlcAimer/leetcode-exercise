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

class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createLists (source) {
  const result = [];

  for (const list of source) {
    const nodeList = list.map(number => new ListNode(number));
    
    for (let index = 0; index < nodeList.length - 1; index++) {
      nodeList[index].next = nodeList[index + 1];
    }

    result.push(nodeList[0]);
  }

  return result;
}

class MyQueue {
  _queue = [];

  push = (node) => {
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

function mergeKLists(lists) {
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

const lists = createLists([[1,4,5],[1,3,4],[2,6]]);
const result = mergeKLists(lists);
result.next;

// @lc code=end
