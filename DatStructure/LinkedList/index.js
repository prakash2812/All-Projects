// single linked list - each node has reference to the node after it or the next node

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node(value, next) {
    this.value = value || null;
    this.next = next || null;
}

// add to tail
// return length of linked list
LinkedList.prototype.push = function (value) {
    let newNode = new Node(value);
    if (!this.tail) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    return ++this.length;
};

//ADD HEAD
//return length of linked list
LinkedList.prototype.unshift = function (value) {
    let newNode = new Node(value);
    if (!this.head) {
        this.tail = newNode;
    } else {
        newNode.next = this.head;
    }
    this.head = newNode;
    ++this.length;
};

// remove head
// return the removed value of head
LinkedList.prototype.shift = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
        this.tail = null;
    }
    --this.length;
    return value;
};

// remove Tail
// return the removed value of tail
LinkedList.prototype.pop = function () {
    if (!this.tail) return null;
    let value = this.tail.value;
    let current = this.head;
    while (current) {
        if (current.next) {
        }
    }
};
let ll = new LinkedList();
ll.push(123);
console.log('Linked list data', ll);
// ll.push(23);
// ll.push(13);
ll.shift();
console.log('Linked list data', ll);
