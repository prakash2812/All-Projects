// node - is an object have {value:2,next:nextNode,prev:prevNode}
// linkedList ---- list of elements linked/connected together in a file. it has
// { head: { { value: 2, next: null, prev: null } }, tail: { { value: 2, next: null, prev: null } } }

// single linked list - each node has reference to the node after it or the next node

// double linked list - each node has reference to the next node and also it has reference to the one before it

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// void functions , imagine the images and change the prev to newNode and if not exits any head then assign fresh to new node
// constant runtime o(1) --> even input increase also it wont effect since it have head and tail reference easy to identify.
LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
};

// void functions , imagine the images and change the next to newNode and if not exits any tails then assign fresh to new node
// constant runtime o(1) --> even input increase also it wont effect since it have head and tail reference easy to identify.
LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
};

//  return removed value
// all we have to do is change the head//tails respective to next/prev
// check if node exits or not
//  if exists then again one node exists and more exists
// constant runtime o(1) --> even input increase also it wont effect since it have head and tail reference easy to identify.

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    return value;
};

//  return removed value
// all we have to do is change the head//tails respective to next/prev
// check if node exits or not
//  if exists then again one node exists and more exists
// constant runtime o(1) --> even input increase also it wont effect since it have head and tail reference easy to identify.
LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    return value;
};

// input value can be number or string
//if not exists output return null or if exits return value
// linear search runtime o(n) -- based on input increases search functionality execution time increases proportionally
LinkedList.prototype.search = function (value) {
    // we can do either from head or tail
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            return value;
        }
        currentNode = currentNode.next;
    }
    return null;
};

// input value - 3->5->3->8
//output [0,2] indexes of given values
//  remember linked list is all elements are in linked each other so we have to give our count variable from 0
LinkedList.prototype.indexOf = function (value) {
    // we can do either from head or tail
    let indexes = [];
    let currentNode = this.head;
    let countIndex = 0;
    while (currentNode) {
        if (currentNode.value === value) {
            indexes.push(countIndex);
        }
        currentNode = currentNode.next;
        countIndex++;
    }
    return indexes;
};

let list = new LinkedList();

list.addToHead(10);
list.addToHead(20);
list.addToHead(30);
list.addToHead(40);
list.addToTail(50);
list.addToTail(60);
console.log(list.removeHead());
console.log(list.removeTail());
console.log(list);
console.log(list.search(20));
console.log(list.indexOf(20));
