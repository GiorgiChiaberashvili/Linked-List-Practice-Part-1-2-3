const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let linkedList = new LinkedList();
for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    for (let i = 0; i < 1000; i++) {
        linkedList.addToHead(i);
    }
    console.log(Date.now() - startTime);
}
// Time Complexity: O(1)

console.log("--------");

let linkedList = new LinkedList();
for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    for (let i = 0; i < 1000; i++) {
        linkedList.addToTail(i);
    }
    console.log(Date.now() - startTime);
}

// Time Complexity: O(n)

console.log("--------");

let doublyLinkedList = new DoublyLinkedList();
for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    for (let i = 0; i < 1000; i++) {
        doublyLinkedList.addToHead(i);
    }
    console.log(Date.now() - startTime);
}


// Time Complexity O(1)

console.log("--------");

let doublyLinkedList = new DoublyLinkedList();
for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    for (let i = 0; i < 1000; i++) {
        doublyLinkedList.addToTail(i);
    }
    console.log(Date.now() - startTime);
}

// Time Complexity O(1)