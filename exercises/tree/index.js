// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) { // naive to remove only based on data and not unique id, nonetheless:
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // traverseBF(fn) {
  //   fn(this.root);
  //   (function inner(node) {
  //     node.children.forEach(node => fn(node));
  //     node.children.forEach(node => inner(node));
  //   })(this.root);
  // }

  traverseBF(fn) {
    const processQueue = [this.root];
    while (processQueue.length) {
      const node = processQueue.shift();
      processQueue.push(...node.children);
      fn(node);
    }
  }

  // traverseDF(fn) {
  //   (function inner(node) {
  //     fn(node);
  //     node.children.forEach(node => inner(node));
  //   })(this.root);
  // }

  traverseDF(fn) {
    const processQueue = [this.root];
    while (processQueue.length) {
      const node = processQueue.shift();
      processQueue.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
