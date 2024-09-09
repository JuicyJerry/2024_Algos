// SOLUTION 1 : BY MYSELF
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l = 0;

    for (let i = 0; i < nums.length; i++) {
        let r = 0;

        if (i > 0) {
            l += nums[i - 1];
        }

        for (let j = i + 1; j < nums.length; j++) {
            r += nums[j];             
        }

        if (l === r) {
            return i;
        }
    }

    return -1;
};

// SOLUTION 2 : Prefix Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];    
    }

    for (let i = 0; i < nums.length; i++) {
        if (l == sum - nums[i] - l) {
            return i;
        }

        l += nums[i];
    }

    return -1;
};

/*
    Complexity Analysis
    Time Complexity: O(N), where N is the length of nums.
    Space Complexity: O(1), the space used by leftsum and S.
*/