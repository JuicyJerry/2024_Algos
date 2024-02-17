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