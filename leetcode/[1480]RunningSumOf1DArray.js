// SOLUTION 1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < i + 1; j++) {
            sum += nums[j];
        }
        arr.push(sum);
    }
    return arr;
};

// SOLUTION 2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    
    nums.forEach((el, idx) => {
        if (idx === 0) {
            arr[idx] = el;
        } else {
            arr[idx] = arr[idx - 1] + el;
        }
    })
    return arr;
};

// SOLUTION 3
var runningSum = function(nums) {
    let arr = nums;
    for (let i = 1; i < nums.length; i++) {
        arr[i] += arr[i - 1];
    }
    return arr;
};