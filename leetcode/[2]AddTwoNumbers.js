// TRY1 : FAIL
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum1 = '';
    let sum2 = '';
    let result = 0;

    while (l1 != null) {
        sum1 += l1.val
        l1 = l1.next;
    }

    while (l2 != null) {
        sum2 += l2.val
        l2 = l2.next;
    }

    console.log('sum1 ---> ', sum1);
    console.log('sum2 ---> ', sum2);

    sum1 = +sum1.split('').reverse().join('');
    sum2 = +sum2.split('').reverse().join('');

    console.log('sum1 ---> ', sum1);
    console.log('sum2 ---> ', sum2);
    console.log('typeof sum1 ---> ', typeof sum1);
    console.log('typeof sum2 ---> ', typeof sum2);
    result = sum1 + sum2;
    console.log('result ---> ', result);
    return result;
};

