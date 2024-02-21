// SOLUTION 1
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let cnt = 0;
    let sortedArr = heights.slice().sort((a, b) => a - b);
    
    for (let i = 0; i < heights.length; i++) {
        if (sortedArr[i] !== heights[i]) cnt++;
    }
    
    return cnt;
};
