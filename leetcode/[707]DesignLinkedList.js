class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Intialize my data structure.
var MyLinkedList = function() {
    this.head = null;
}

// Get value of N-th node in linked list.
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) return -1;
    let cur = this.head;

    while (index--) {cur = cur.next;}
    return cur.val;
}

// Add a node of value val before the first element of the linked list.
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
}

// Add a node of value val after the last element of the linked list.
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) return this.addAtHead(val);
    let node = new ListNode(val);
    let cur = this.head;
    while (cur.next != null) cur = cur.next;
    cur.next = node;
}

// Add a node of value val before the N-th node in the linked list.
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        return this.addAtHead(val);
    }
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;

    let cur = this.head;
    let node = new ListNode(val);
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = node;
    node.next = next;
}

// Delet the index-th node in the linked list.
MyLinkedList.prototype.deleteAtIndex = function(index) {
   if (index < 0 || index >= this.getLength()) return;
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
}

// Get length of the linked list.
MyLinkedList.prototype.getLength = function() {
    let len = 0;
    let cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
}