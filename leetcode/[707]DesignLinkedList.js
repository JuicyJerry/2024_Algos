function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }    
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    console.log('[addAtHead] newNode ---> ', newNode);
    newNode.next = this.head; // link to head
    this.head = newNode; 
    // newNode와 head는 연결된 상태인데, 왜 newNode를 할당하지? -> newNode를 새로운 head로 설정
    // newNode.next = this.head;를 생략하고 바로 this.head = newNode;를 수행한다면, 새 노드는 이전 head를 가리키지 x
    // 이전 head 노드와 뒤에 이어지는 노드들은 모두 "잃어버리게" 되어, 리스트에서 접근 x 
    
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    console.log('[addAtTail] newNode ---> ', newNode);
    let cur = this.head ? this.head : newNode;
    while (cur.next != null) {
        cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val);
    let cur = this.head ? this.head : newNode;
    for (let i = 0; i < index - 1; i++) {
        cur = this.cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */