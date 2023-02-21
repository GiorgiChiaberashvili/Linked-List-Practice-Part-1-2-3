class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.pointer = undefined;
  }

  addToHead(val) {
    // Your code here
    // Create a new node with the given value
    const newNode = new LinkedListNode(val);
    // Set the node's `next` pointer to the list's current head pointer
    newNode.next = this.head;
    // Set the list head to point to the new link
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    this.length++;
    if (!this.head) {
      this.head = new LinkedListNode(val);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    current.next = new LinkedListNode(val);
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
