// SOLUTION 1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i] && needle === haystack.slice(i, i + needle.length)) {
            return i;
        }
    }

    return -1;
};