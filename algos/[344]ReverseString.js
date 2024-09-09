// SOLUTION 1
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length;

    for (let i = start; i < end / 2; i++) {
        let temp = s[i];
        s[i] = s[end - i - 1];
        s[end - i - 1] = temp;
    }  
};

// Time complexity : O(N) time to perform N/2N/2N/2 swaps.
// Space complexity : O(N) to keep the recursion stack.