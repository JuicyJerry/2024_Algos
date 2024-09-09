// SOLUTION 1
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length <= 1) arr[0] = -1;
    let t = 0;

    for (let i = 0; i < arr.length; i++) {
        let max = -1;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > max) max = arr[j];
        }
        
        if (max !== -1) {
            arr[t] = max;
            t++;
        } else {
            arr[t] = -1;
        }
    }
    return arr;
};

// SOLUTION 2
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    let cur;
    for (let i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        arr[i] = max;
        max = max > cur ? max : cur;
    };
    return arr;
};



