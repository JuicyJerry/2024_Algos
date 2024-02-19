// SOLUTION 1
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length;
    let max = -1;
    let maxIndex = -1;

    if (len < 3) return false;
    for (let el of arr) {
        if (el > max) {
            max = el;
        }
    }
    maxIndex = arr.indexOf(max);

    if (max === maxIndex || maxIndex === 0) return false;
    for (let i = 0; i < maxIndex; i++) {
        if (arr[i] >= arr[i + 1]) return false;
    }

    for (let i = maxIndex; i < len; i++) {
        if (arr[i] <= arr[i + 1]) return false;
    }
    
    return true;
};

// SOLUTION 2
