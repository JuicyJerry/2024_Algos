// TRY1: SUCCESS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right  = nums.length - 1;
    let map = new Map();
    let result;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i]);
    }
    
    let sum = 0;
    nums.sort((a, b) => a - b);

    while (right !== left) {
        sum = nums[left] + nums[right];
        
        if (sum > target) right--;
        else if (sum < target) left++;
        else break;
    }

    if ((map.get(nums[left])[0] == map.get(nums[right])[0]) && (map.get(nums[left]).length === map.get(nums[right]).length)) {
        result = [map.get(nums[left])[0], map.get(nums[right])[1]]
    } else {
        result = [map.get(nums[left])[0], map.get(nums[right])[0]]
    }

    return result;
};