// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    for (let t = 0; t < nums.length; t++) {
        if (nums[t] !== 0) {
            nums[i++] = nums[t];
        }
    }

    for (let t = i; t < nums.length; t++) {
        nums[t] = 0;
    }
    return nums;
};