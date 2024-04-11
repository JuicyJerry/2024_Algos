// TRY2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) r = mid - 1;
        else if (nums[mid] < target) l = mid + 1; 
    }
    return l;
};
// Time Complexity : O(logN)
// Space Complexity : O(1)

// TRY1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;

    for (let el of nums) {
        if (el >= target) {
            return i;
        }
        i++;
    }

    return i;
};

// Time Complexity : O(N)
// Space Complexity : O(1)
