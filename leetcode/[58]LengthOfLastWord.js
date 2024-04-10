// TRY1
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let regex = /\s+/g;
    let pureStrsArr = s.replace(regex, " ").split(" ").filter((el) => el !== "");
    return pureStrsArr[pureStrsArr.length - 1].length;
};

// TIME COMPEXITY: O(N);
// SPACE COMPEXITY: O(N);

// TRY2 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length;
    let len = 0;
    while (i) {
        if (len > 0 && (s[i - 1] === " " || s[i - 1] === undefined)) break;
        if (s[i - 1] === " ") {
            i--;
            continue;
        } 

        len++;
        i--;
    }
    
    return len === 0 ? s.length : len;
};