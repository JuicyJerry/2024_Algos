
var TwoSum = function() {
    this.arr = [];
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.arr.push(number);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    let l = 0;
    let r = this.arr.length - 1;
    this.arr.sort((a, b) => a - b);

    if (this.arr.length <= 1) return false;
    for (let i = 0; i < this.arr.length; i++) {
        if (l === r) break;
        else if (this.arr[l] + this.arr[r] === value) return true;
        else if (this.arr[l] + this.arr[r] > value) r--;
        else l++;
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

// Time COMPLEXITY: O(nlogn)
// Space COMPLEXITY: O(n)