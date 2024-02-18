// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums = nums.map((el) => Math.pow(el, 2)).sort((a, b) => a - b);
};