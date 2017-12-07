// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this._size = 0;
//   }
//   *[Symbol.iterator]() {
//     let node = this.head;
//     while (node) {
//       yield node;
//       node = node.next;
//     }
//   }
//   insertFirst(data) { // constant time O(1)
//     const newHead = new Node(data, this.head);
//     this.head = newHead;
//     this._size++
//     if (!this.tail) this.tail = newHead;
//   }
//   size() { // constant time O(1)
//     return this._size;
//   }
//   getFirst() { // constant time O(1)
//     return this.head;
//   }
//   getLast() { // constant time O(1)
//     return this.tail;
//   }
//   clear() { // constant time O(1)
//     this.head = this.tail = null;
//     this._size = 0;
//   }
//   removeFirst() { // constant time O(1)
//     this.head = this.head.next;
//     this._size--;
//   }
//   removeLast() { // linear time O(n)
//     this.size() ? this._size-- : null;
//     let node = this.head;
//     if (!node || !node.next) {
//       this.head = this.tail = null;
//       return;
//     }
//     while (node.next) {
//       var beforeTail = node;
//       node = node.next;
//     }
//     this.tail = beforeTail;
//   }
//   insertLast(data) { // constant time O(1)
//     const node = new Node(data);
//     if (!this.head) this.head = this.tail = node;
//     this.tail.next = node;
//     this.tail = this.tail.next;
//     this._size++;
//   }
//   getAt(index) { // linear time O(n)
//     let node = this.head;
//     for (let i = 0; i < index; i++) {
//       if (!node) return null;
//       node = node.next;
//     }
//     return node;
//   }
//   removeAt(index) { // linear time O(n)
//     let node = this.head;
//     if (!node) return;
//     for (let i = 0; i < index; i++) {
//       var prev = node;
//       node = node.next;
//       if (!node) return;
//     }
//     if (node === this.head) {
//       this.head = this.head.next;
//       return;
//     }
//     if (node === this.tail) {
//       this.tail = prev || null;
//       if (this.tail) this.tail.next = null;
//     }
//     else prev.next = node.next;
//   }
//   insertAt(data, index) { // linear time O(n)
//     let node = new Node(data);
//     if (index === 0) {
//       node.next = this.head;
//       this.head = node;
//     } else {
//       let i = 0;
//       let curr = this.head;
//       while (i < index && curr.next) {
//         var prev = curr;
//         curr = curr.next;
//         i++;
//       }
//       if (curr === this.tail) {
//         curr.next = node;
//         this.tail = node;
//       } else {
//         prev.next = node;
//         node.next = curr;
//       }
//     }
//     this._size++;
//   }
//   forEach(fn) { // linear time O(n)
//     let node = this.head;
//     while (node) {
//       fn(node);
//       node = node.next;
//     }
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) { // constant time O(1)
    this.head = new Node(data, this.head);
  }
  size() { // linear time O(n)
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() { // constant time O(1)
    return this.head;
  }
  getLast() { // linear time O(n)
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() { // constant time O(1)
    this.head = null;
  }
  removeFirst() { // constant time O(1)
    this.head = this.head ? this.head.next : null;
  }
  removeLast() { // linear time O(n)
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node.next) {
      var prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  insertLast(data) { // linear time O(n) - due to getLast
    const node = new Node(data);
    const prev = this.getLast();
    prev ? prev.next = node : this.head = node;
  }
}

module.exports = { Node, LinkedList };
