// SOLUTION 1 : sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // O(Nlog⁡N) time
    let sortedNums = nums.sort((a, b) => b - a);
    let arr = [sortedNums[0]];
    let p = 0;
    
    for (let i = 1; i < sortedNums.length; i++) {
        if (arr[p] !==  sortedNums[i] && arr[p] > sortedNums[i]) {
            arr.push(sortedNums[i]);
            p++;
        }
    }

    if (arr[2] || arr[2] === 0) {
        return arr[2];
    }
    return arr[0];
};

// Time complexity : O(NlogN)
// Space complexity : O(1)

// SOLUTION 2 : sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);
    let countedEl = 1;
    let preEl = nums[0];

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] !== preEl) {
            countedEl += 1;
            preEl = nums[i];
        }

        if (countedEl === 3) {
            return nums[i];
        }
    }

    return nums[0];
};
