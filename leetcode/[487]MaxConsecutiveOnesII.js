// SOLUTION 1 : BRUTE FORCE
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longestNum = 0;
    for (let l = 0; l < nums.length; l++) {
        let numZeroes = 0;

        for (let r = l; r < nums.length; r++) {
           if (nums[r] === 0) {
                numZeroes += 1;
            }
 
            if (numZeroes <= 1) {
                longestNum = Math.max(longestNum, r - l + 1);
            }
        }
    }
    return longestNum;
};