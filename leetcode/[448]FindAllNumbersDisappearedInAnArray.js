// SOLUTION 1 : Hashmap
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let obj = {};

    for (let i = 1; i <= len; i++) {
        obj[i] = false;
    }

    for (let i = 0; i < len; i++) {
        obj[nums[i]] = true;
    }
    
    let arr = [];
    for (let i = 0; i <= len; i++) {
        if (obj[i] === false) {
            arr.push(i);
        }
    }
  
    return arr;
};

/*
    Time Complexity : O(N)
    Space Complexity : O(N)
*/

// SOLUTION 2 : Space InPlace Modification Solution : O(1) Space InPlace Modification Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let newIdx = Math.abs(nums[i]) - 1;

        if (nums[newIdx] > 0) {
            nums[newIdx] *= -1;
        }
    }

    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr.push(i + 1);
        }
    }

    return arr;
};

/*
    Time Complexity : O(N)
    Space Complexity : O(1) : since we are reusing the input array itself as a hash table and the space occupied by the output array doesn't count toward the space complexity of the algorithm.
*/