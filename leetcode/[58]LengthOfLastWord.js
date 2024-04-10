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