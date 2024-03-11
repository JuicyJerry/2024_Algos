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