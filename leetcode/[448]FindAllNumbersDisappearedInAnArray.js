// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let obj = {};

    for (let i = 1; i <= len; i++) {
        obj[i] = false;
    }

    for (let i = 0; i < len; i++) {
        obj[nums[i]] = true;
    }
    
    let arr = [];
    for (let i = 0; i <= len; i++) {
        if (obj[i] === false) {
            arr.push(i);
        }
    }
    return arr;
};