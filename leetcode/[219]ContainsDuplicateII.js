/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i]);
    }

    for (let el of map) {
        if (el[1].length > 1) {
            let len = el[1].length;
            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    if (Math.abs(el[1][i] - el[1][j]) <= k) return true;
                }
            }
        }
    }

    return false;
};

// Time Complexity: O(N^2) 
// Space Complexity: O(N) 