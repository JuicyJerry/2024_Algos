// SOLUTION 1
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null || head.next === null) return null;
    let newNode = new ListNode(0);
    newNode.next = head;
    let dummy = newNode;

    let tempNode = head;
    let len = 0;
    while (tempNode != null) {
        len++;
        tempNode = tempNode.next;
    }    

    for (let i = 0; i < len - n; i++) {
        newNode = newNode.next;
    }

    newNode.next = newNode.next.next;
    return dummy.next;
};