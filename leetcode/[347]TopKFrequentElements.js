/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i])
    }
    
    let entries = Array.from(map.entries());
    entries.sort((a, b) => b[1].length - a[1].length);
    let sortedMap = new Map(entries);
    return Array.from(sortedMap.keys()).slice(0, k);
};

// Time COMPLEXITY: O(nlogn)
// Space COMPLEXITY: O(m)