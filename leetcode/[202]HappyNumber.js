// TRY2: 
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = handleNumber(n);
    }
    return n === 1 ? true : false;
};

var handleNumber = function(num) {
    return num.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}


// TRY1: FAIL
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let newSet = new Set();
    let powerStr = n.toString(10).length > 1 ? n.toString(10) : Math.pow(n, 2).toString(10); 
    console.log('powerStr ---> ', powerStr);
    if (powerStr.length > 1) {
        console.log('[check-in] if');
        let res = calculator(powerStr, newSet);
        console.log('res ---> ', res);
        return res;
    } else {
        powerStr = Math.pow(n, 2).toString(10);
        if (powerStr[powerStr.length - 1] === '1' || powerStr % 10 === 1) return true;
        return false;
    }
};

var calculator = function(powerStr, newSet) {
    console.log('[check-in] calculator');
    while (powerStr.length != 1) {
        powerStr = powerStr.split('').map((el) => Math.pow(parseInt(el, 10), 2));
        console.log('powerStr ---> ', powerStr);
        powerStr = powerStr.reduce((acc, cur) => acc + cur, 0).toString(10);
        newSet.add()
        console.log('powerStr ---> ', powerStr);
        if (powerStr % 10 === 1) return true;
        console.log('powerStr ---> ', powerStr, '\n');
    }
    return false;
}