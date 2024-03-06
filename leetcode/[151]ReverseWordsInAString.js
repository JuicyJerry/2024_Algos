// SOLUTION 1
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(' ').filter((el) => el.length != 0).reverse().join(' ');
};

// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(n)