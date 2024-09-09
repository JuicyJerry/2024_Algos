/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let newMap = new Map();
    for (let i = 0; i < s.length ; i++) {
        if (newMap.get(s[i])) newMap.get(s[i]).push(i);
        else newMap.set(s[i], [i]);
    }    

    let fromNewMap = Array.from(newMap);
    for (let el of fromNewMap) {
        if (el[1].length === 1) return el[1][0];
        continue;
    } 
    
    return -1;
};

// Time Complexity: O(N);
// Space Complexity: O(N);