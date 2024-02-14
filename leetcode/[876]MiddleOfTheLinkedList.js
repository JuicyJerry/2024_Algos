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
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [head];

    while (arr[arr.length - 1].next !== null) {
        arr.push(arr[arr.length - 1].next);
    }

    return arr[Math.trunc(arr.length / 2)];
};

// Time Complexity: O(N), where N is the number of nodes in the given list.
// Space Complexity: O(N), the space used by arr


// SOLUTION 2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head;
    
    while (fast && fast.next) {
        console.log('slow ===> ', slow);
        console.log('fast ===> ', fast);
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};