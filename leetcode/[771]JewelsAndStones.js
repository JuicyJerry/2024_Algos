// TRY1: SUCCESS
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let cnt = 0;
    let jewel = new Set(jewels); 
    for (let el of stones) {
        if (jewel.has(el)) cnt++;
    }

    return cnt;
};

// Time Compexity: O(N);
// Space Compexity: O(M);