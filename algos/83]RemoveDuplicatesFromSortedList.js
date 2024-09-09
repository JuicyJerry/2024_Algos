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
var deleteDuplicates = function(head) {
    let res = head;

    while (res) {
        if (res.next !== null && res.val === res.next.val) {
            res.next = res.next.next;
        } else {
            res = res.next; 
        }
    }
    return head;
};