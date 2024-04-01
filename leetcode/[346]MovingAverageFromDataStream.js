/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.arr = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.arr.length >= this.size) {
        this.arr.shift(val);
    }
    
    this.arr.push(val);
    let sum = this.arr.reduce((acc, cur) => acc + cur, 0);
    return sum / this.arr.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */