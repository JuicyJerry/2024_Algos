// SOLUTION 1
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if (head === null || head.next === null|| head.next.next === null) {
         return false;
    }
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next !== null) { // 안전하게 두 칸씩 이동할 수 있도록 보장
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

