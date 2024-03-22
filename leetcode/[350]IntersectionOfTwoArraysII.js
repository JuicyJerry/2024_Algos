/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    if (nums1.length > nums2.length) isNums1Big = true;
    else isNums2Big = false;

    for (let el of nums1) {
        if (map1.has(el)) map1.set(el, map1.get(el) + 1);
        else map1.set(el, 1);
    }
    
    for (let el of nums2) {
        if (map2.has(el)) map2.set(el, map2.get(el) + 1);
        else map2.set(el, 1);
    }

    let result = comapareTwoArray(map1, map2, nums1, nums2);
    return result;
};

var comapareTwoArray = (map1, map2, nums1, nums2) => {
    let result = [];

    if (nums1.length > nums2.length) {
        for (let el of nums2) {
            if (map1.has(el) && map2.has(el) && map1.get(el) > 0 && map2.get(el) > 0) {
                map1.set(el, map1.get(el) - 1);
                map2.set(el, map2.get(el) - 1);
                result.push(el);
            }
        }
    } else {
        for (let el of nums1) {
            if (map1.has(el) && map2.has(el) && map1.get(el) > 0 && map2.get(el) > 0) {
                map1.set(el, map1.get(el) - 1);
                map2.set(el, map2.get(el) - 1);
                result.push(el);
            }
        }
    }
    
    return result;
}

// Time Complexity: O(N + M);
// Space Complexity: O(N + M);