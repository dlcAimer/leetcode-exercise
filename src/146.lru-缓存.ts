/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUNode {
  previous: LRUNode = null;
  next: LRUNode = null;
  key: number = null;
  value: number = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }

  refresh(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  dictionary: Map<number, LRUNode> = null;
  nodeCount: number = 0;
  capacity: number = 0;
  head: LRUNode = null;
  tail: LRUNode = null;

  constructor(capacity: number) {
    this.dictionary = new Map();
    this.capacity = capacity;
    this.nodeCount = 0;
    this.head = new LRUNode(-1, -1);
    this.tail = new LRUNode(-1, -1);
    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  deleteNode(node: LRUNode) {
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.dictionary.delete(node.key);
  }

  deleteFirstNode() {
    const firstNode = this.head.next;
    this.deleteNode(firstNode);
  }

  insertLastNode(node: LRUNode) {
    const previous = this.tail.previous;
    previous.next = node;
    node.previous = previous;
    node.next = this.tail;
    this.tail.previous = node;
    this.dictionary.set(node.key, node);
  }

  get(key: number): number {
    const alreadyExistNode = this.dictionary.get(key);

    if (alreadyExistNode) {
      this.deleteNode(alreadyExistNode);
      this.insertLastNode(alreadyExistNode);
      return alreadyExistNode.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    const alreadyExistNode = this.dictionary.get(key);

    if (alreadyExistNode) {
      this.deleteNode(alreadyExistNode);
      alreadyExistNode.refresh(key, value);
      this.insertLastNode(alreadyExistNode);
      return;
    }

    const node = new LRUNode(key, value);

    if (this.nodeCount === this.capacity) {
      this.deleteFirstNode();
    } else {
      this.nodeCount++;
    }

    this.insertLastNode(node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
