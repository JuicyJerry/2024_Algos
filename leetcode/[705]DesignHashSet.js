function MyHashSet() {
    this.bucketArray = [];
    this.bucketSize = 1000; // 버킷의 크기를 정의 (이 예시에서는 1000으로 설정)
}

MyHashSet.prototype.hash = function(key) {
    return key % this.bucketSize; // 간단한 해시 함수: key 값을 버킷 크기로 나눈 나머지
};

MyHashSet.prototype.add = function(key) {
    const hashKey = this.hash(key);
    if (!this.bucketArray[hashKey]) {
        this.bucketArray[hashKey] = [];
    }
    if (!this.contains(key)) {
        this.bucketArray[hashKey].push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    const hashKey = this.hash(key);
    const bucketList = this.bucketArray[hashKey];
    if (!bucketList) return;

    const index = bucketList.indexOf(key);
    if (index > -1) {
        bucketList.splice(index, 1); // 해당 인덱스의 키를 배열에서 제거
    }
};

MyHashSet.prototype.contains = function(key) {
    const hashKey = this.hash(key);
    const bucketList = this.bucketArray[hashKey];
    return bucketList ? bucketList.indexOf(key) > -1 : false;
};







// TRY2 : FAIL
var MyHashSet = function() {
    this.arr = [];
    this.size = 0;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.arr.push(key);
    this.size++;
    console.log('[add] this.arr ---> ', this.arr, '\n');
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let targetIndex = this.arr.indexOf(key);
    this.arr.splice(targetIndex, 1);
    this.size--;
    console.log('[remove] this.arr ---> ', this.arr, '\n');
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let targetIndex = this.arr.indexOf(key);
    let isContain = false;
    isContain = targetIndex > -1 ? true : false;
    console.log('[contains] key ---> ', key, '\n');
    console.log('[contains] isContain ---> ', isContain, '\n');
    return isContain;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */