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