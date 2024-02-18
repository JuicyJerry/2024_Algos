// SOLUTION 1
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
*/
var removeElement = function(nums, val) {
    const newNums = nums.filter((el) => el !== val);
    for (let i = 0; i < newNums.length; i++) {
        nums[i] = newNums[i];
    }
    
    console.log(newNums);
    console.log(nums);
    return nums;
};

// SOLUTION 2
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}; 

// SOLUTION 3
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }

    return n;
}; 