// SOLUTION 1
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let tempNum = num;
    let step = 0;
    
    while (tempNum !== 0) {
        step++;
        if (tempNum % 2 === 0) {
            tempNum /= 2;
        } else {
            tempNum -= 1;
        }
    }
    return step;
};

// SOLUTION 2
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let tempNum = num;
    let stepArr = [];
    
    while (tempNum !== 0) {
        if (tempNum % 2 === 0) {
            tempNum /= 2;
            stepArr.push(tempNum);
        } else {
            tempNum -= 1;
            stepArr.push(tempNum);
        }
    }
    return stepArr.length;
};

// SOLUTION 2
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;
    
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        step++;
    }
    return step;
};

// SOLUTION 3 : Bitwise
// binary representation of integers
// Logical Bitwise Operators
// Bitmask
/**
 * @param {number} num
 * @return {number}
*/
// & : 두 피연산자의 대응하는 비트가 둘 다  1일 경우 1을 반환
// (num & 1) === 0 : num의 짝수 여부 판단
// num >>= 1 : num / 2와 같은 의미
var numberOfSteps = function(num) {
    let step = 0;
    
    while (num > 0) {
        if ((num & 1) === 0) { 
            num >>= 1;
        } else {
            num--;
        }
        step++;
    }
    return step;
};


// Time Complexity = 0(logN)
// Space Complexity = 0(1)