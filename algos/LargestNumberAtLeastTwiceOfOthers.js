// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largestNum = Math.max(...nums);
    let largestNumIdx = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (largestNum === nums[i]) {
            largestNumIdx = i;
            continue;
        }
        
        if (nums[i] * 2 > largestNum) return -1;
    }
    return largestNumIdx;
};