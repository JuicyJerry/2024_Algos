/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let tempStr = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
        if (map.has(tempStr)) map.get(tempStr).push(strs[i]);
        else map.set(tempStr, [strs[i]]);
    }
    
    return map = Array.from(map).map((el) => el = el[1]);
};

// Time Complexity: O(m * n log n)
// Space Complexity: O(m)