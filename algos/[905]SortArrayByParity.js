// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            let temp = nums[p];
            nums[p++] = nums[i];
            nums[i] = temp;
        } 
    }
    return nums;
};

// SOLUTION 2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let l = 0, r = nums.length - 1;
    
    while (l < r) {
        if (nums[l] % 2 === 1 && nums[r] % 2 === 0) {
            // 비구조화 할당(destructuring assignment)
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
        
        if (nums[l] % 2 === 0) l++;
        if (nums[r] % 2 === 1) r--;
    }
    
    return nums;
};