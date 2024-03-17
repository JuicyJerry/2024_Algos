/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let num1Set = new Set(nums1);
    let num2Set = new Set(nums2);

    for (let el of num1Set) {
        if (num2Set.has(el)) result.push(el);
    }
    return result;
};