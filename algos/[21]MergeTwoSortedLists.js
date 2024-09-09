// Final : SUCCESS
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (list1 != null && list2 != null) {
        if (list1.val > list2.val) {
            current.next = list2;
            list2 = list2.next;
        } else {
            current.next = list1;
            list1 = list1.next;
        }
        current = current.next;
    }
    current.next = list1 ? list1 : list2;

    return dummyHead.next;
};

/*
    Time Complexity: O(n + m) - list1 길이(n), list2 길이(m)
    Space Complexity: O(1) - 추가 데이터 구조 사용x, 재연결만 함
*/


// ===================================================================



// Try 1
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // result, head1, head2
    // list1를 traverse하면서 list2 노드가 list1의 노드값보다 같거나 작을 경우 해당 노드 앞에 추가
    // 만약, list2 값이 높다면 list2 traverse 중단 후 다음 list1 노드로 이동
    // 둘 다 빈 값일 경우 -> 빈 값 리턴, 하나만 빈 값일 경우 -> 값이 존재하는 노드 리턴
    let head1 = new ListNode();
    let head2 = new ListNode();
    let tempList1 = list1;
    let tempList2 = list2;
    let result = null;
    console.log('result --> ', result);
    console.log('head1 --> ', head1);
    console.log('head2 --> ', head2);
    console.log('list1 --> ', list1);
    console.log('list2 --> ', list2);

    let len1 = 0;
    let len2 = 0;
    while(tempList1 !== null) {
        // console.log('tempList1.next ---> ', tempList1.next);
        tempList1 = tempList1.next;
        len1++;
    }
    while(tempList2 !== null) {
        // console.log('tempList2.next ---> ', tempList2.next);
        tempList2 = tempList2.next;
        len2++;
    }
    console.log('len1 --> ', len1);
    console.log('len2 --> ', len2);

    // head1 = list1.next;
    // head2 = list2.next;
    let len = len1 > len2 ? len1 : len2;
    head1.next = list1;
    head2.next = list2;
    console.log('head1.next --> ', head1.next);
    console.log('head2.next --> ', head2.next);
    console.log('!!head1 --> ', !!head1);
    console.log('!!head1.next --> ', !!head1.next);
    console.log('!!head1 && !!head1.next --> ', !!head1 && !!head1.next);
    while (head1 && head1.next) {
        if (head1.val >= head2.val) {
            if (!result) result = head2;
            else result.next = head2;
        } else if (head1.val <= head2.val){
            if (result.next) result.next = head1;
            else result = head1;
        }
        console.log('result --> ', result);
        console.log('head1 --> ', head1);
        console.log('head2 --> ', head2);
    }
};


// SOLUTION 1 : Recursion
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list2) return list1;
    else if (!list1) return list2;
    else if (list1.val >= list2.val) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
};
// Time complexity: O(N + M)
// Space complexity: O(N + M)

// SOLUTION2: Iteration
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // prehead: 임시 노드, 초기 시작점 제공, 실제 데이터 담지 않고 최종 리스트 시작점 가리키기 위한 참조용 등..
    let prehead = new ListNode(-1); 
    // prev: 연결리스트 구축 동안 현재 처리 중인 마지막 노드 추적, 항상 결과 리스트의 마지막 노드 가리킴 - 지속적인 업데이트, 연재 위치 추적, 리스트 연결 유지 등..
    let prev = prehead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    prev.next = list1 === null ? list2 : list1;
    return prehead.next;
};
// Time complexity: O(N)
// Space complexity: O(1)
