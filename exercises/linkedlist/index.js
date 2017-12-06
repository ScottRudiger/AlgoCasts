// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }
  insertFirst(data) { // constant time O(1)
    const newHead = new Node(data, this.head);
    this.head = newHead;
    this._size++
    if (!this.tail) this.tail = newHead;
  }
  size() { // constant time O(1)
    return this._size;
  }
  getFirst() { // constant time O(1)
    return this.head;
  }
  getLast() { // constant time O(1)
    return this.tail;
  }
  clear() { // constant time O(1)
    this.head = this.tail = null;
    this._size = 0;
  }
  removeFirst() { // constant time O(1)
    this.head = this.head.next;
    this._size--;
  }
  removeLast() { // linear time O(n)
    this.size() ? this._size-- : null;
    let node = this.head;
    if (!node || !node.next) {
      this.head = this.tail = null;
      return;
    }
    while (node.next) {
      var beforeTail = node;
      node = node.next;
    }
    this.tail = beforeTail;
  }
  insertLast(data) {
    this.tail.next = new Node(data);
    this.tail = this.tail.next;
    this._size++;
  }
}

module.exports = { Node, LinkedList };
