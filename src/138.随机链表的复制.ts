/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return;
  }

  const nodeMap = new Map<_Node, _Node>();
  let pointer = head, result: _Node | null = null, previous: _Node | null = null;

  while (pointer) {
    const newPointer = new _Node(pointer.val, null);
    nodeMap.set(pointer, newPointer);
    pointer = pointer.next;

    if (previous) {
      previous.next = newPointer;
    }
    previous = newPointer;

    if (!result) {
      result = newPointer;
    }
  }

  pointer = head;
  let pointer2 = result;

  while (pointer) {
    if (pointer.random) {
      pointer2.random = nodeMap.get(pointer.random);
    }
    pointer = pointer.next;
    pointer2 = pointer2.next;
  }

  return result;
};
// @lc code=end

