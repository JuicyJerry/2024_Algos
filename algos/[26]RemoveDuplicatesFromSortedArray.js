// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number}
*/
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
        nums[++i] = nums[j];
}
console.log(nums);
console.log(i);
return ++i;
};

// SOLUTION 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }

    // all values in nums from 0 up to this index value are considered unique
    let insertIndex = 1;
    for (let j = 1; j < n; j++) {
        if (nums[j] !== nums[j - 1]) {
            nums[insertIndex] = nums[j];
            insertIndex++;
        }
    }
    return insertIndex;
};