// TRY1: FAIL 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let str = '';

    if (s.length === 0) return 0;
    for (let i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) > -1) {
            map.set(str, str.length);
            str = '';
        } 
        // else if (i === s.length - 1) {
        //     map.set(str, i + 1);
        // } 
        str += s[i];
    }

    return Math.max(...Array.from(map.values()));
};
