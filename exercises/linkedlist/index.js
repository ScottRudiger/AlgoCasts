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
    this._size = 0;
  }
  insertFirst(data) {
    const newHead = new Node(data, this.head);
    this.head = newHead;
    this._size++
  }
  size() {
    return this._size;
  }
}

module.exports = { Node, LinkedList };
