// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// adding // if any already in stack 1, move to stack 2
// removing // if stack 1 empty, move all from stack 2 to stack 1

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(item) {
    // if any items in stack1
    if (this.stack1.peek()) {
      // add item to stack 2
      this.stack2.push(item);
    } else {
      // otherwise, add to stack 1
      this.stack1.push(item);
    }
  }
  remove() {
    // pull item from stack 1
    const item = this.stack1.pop();
    // if none left in stack 1
    if (!this.stack1.peek()) {
      // move all from stack 2 to stack 1
      while (this.stack2.peek()) {
        this.stack1.push(this.stack2.pop());
      }
    }
    return item;
  }
  peek() {
    return this.stack1.peek();
  }
}

module.exports = Queue;
