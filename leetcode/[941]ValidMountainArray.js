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
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length;
    let maxNum = Math.max(...arr);
    let maxNumIdx = arr.indexOf(maxNum);

    if (len <= 1 || maxNumIdx + 1 === len) return false;
    for (let i = 1; i < len; i++) {
        if (i === maxNumIdx) break;
        if (arr[i - 1] >= arr[i]) return false; 
    }

    for (let i = maxNumIdx + 1; i < len; i++) {
        if (arr[i - 1] <= arr[i]) return false; 
    }

    return true;
};

// SOLUTION 3
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length;
    let i = 0;

    // walk up
    while (i < len && arr[i] < arr[i+1]) i++;
    console.log('i (0) ===> ', i);
    console.log('arr[i] ===> (0) ', arr[i]);

    // peak validation
    if (i == 0 || i == len-1) return false;

    // walk down
    while (i < len && arr[i] > arr[i+1]) i++;

    return i == len-1;
};

// SOLUTION 4
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length - 1;
    let left = 0, right = arr.length - 1;

    if (arr.length < 3) return false;
    while (arr[left] < arr[left + 1]) {
        left++;
    }

    while (arr[right - 1] > arr[right]) {
        right--;
    }

    if (left === len || right === 0) return false;
    return left === right;
};

// SOLUTION 5
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;
    
    if (arr.length < 3) return false;
    
    while (arr[l] < arr[l + 1]) l++;    
    while (arr[r - 1] > arr[r]) r--;
    
    if (l === arr.length - 1 || r === 0) return false;
    return l === r;
};