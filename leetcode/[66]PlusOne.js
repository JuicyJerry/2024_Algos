// SOLUTION 1 : Big Int
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let strDigits = BigInt(digits.join('')) + 1n;
    return strDigits.toString().split('');
};

// SOLUTION 2
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    digits.unshift(1)
    return digits;
};