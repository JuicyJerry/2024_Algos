// Try2
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.storage = [];
    this.currentSize = 0;
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.currentSize >= this.maxSize) {
        return false;
    };

    this.rear = (++this.rear) % this.maxSize;
    this.storage[this.rear] = value;
    this.currentSize++;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.currentSize === 0) {
        return false;
    };

    this.front = (++this.front) % this.maxSize;
    this.currentSize--;
    
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.currentSize === 0 ? -1 : this.storage[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.currentSize === 0 ? -1 : this.storage[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


// Try1: fail
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
    // for (let i = 0; i < k; i++) {
    //     this.queue[i] = null;
    // }

    this.size = k;
    this.frontIdx = 0;
    this.rearIdx = this.queue.length - 1;


    console.log('[MyCircularQueue] this.queue ---> ', this.queue);
    console.log('[MyCircularQueue] this.frontIdx ---> ', this.frontIdx);
    console.log('[MyCircularQueue] this.rearIdx ---> ', this.rearIdx);
    console.log('[MyCircularQueue] this.size ---> ', this.size, '\n');
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    console.log('[enQueue]this.queue (start) ---> ', this.queue, value);
    console.log('this.isFull() ---> ', this.isFull());

    if (!this.isFull()) {
        // for (let i = 0; i < this.size; i++) {
        //     this.queue[i] = this.queue[i + 1];
        //     // 0 0 1 2 3
        //     // 0 1 1 2 3
        //     // 0 1 2 2 3
        //     // 0 1 2 3 3
        //     // 0 1 2 3 3
        // }

        console.log('[enQueue]this.queue (end - 1) ---> ', this.queue);
        if (this.queue.length === 0) {
            this.queue[this.frontIdx] = value;
        } else {
            this.queue[this.rearIdx] = value;
        }

        console.log('[enQueue]this.queue (end - 2) ---> ', this.queue);
        console.log('this.isFull() (check2) ---> \n');
        return true;
    } 

    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    console.log('[deQueue]this.queue (start) ---> ', this.queue);
    console.log('[deQueue]this.frontIdx ---> ', this.frontIdx);
    console.log('[deQueue]this.queue[this.frontIdx] ---> ', this.queue[this.frontIdx]);
    if (this.queue[this.frontIdx] !== undefined || this.queue[this.frontIdx] !== null) {
        this.queue[this.frontIdx] = null;
        // this.frontIdx++;
    } else {
        return false;
    }

    console.log('[deQueue]this.queue (end) ---> ', this.queue, '\n');
    return true;
    // console.log('[deQueue]this.queue (end) ---> ', this.queue);
    // return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    console.log('[Front]this.queue[this.frontIdx] ---> ', this.queue[this.frontIdx], '\n');

    return this.queue[this.frontIdx] ? this.queue[this.frontIdx] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    console.log('[Rear]this.queue[this.rearIdx] ---> ', this.queue[this.rearIdx], '\n');
    return this.queue[this.rearIdx] ? this.queue[this.rearIdx] : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.filter((el) => typeof el === 'number').length === 0 ? true : false; 
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.filter((el) => el !== null && el !== undefined).length === this.size ? true : false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
