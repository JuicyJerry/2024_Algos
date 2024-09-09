/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) continue;
            if (arr[i] == 2 * arr[j]) {
                return true;
            }
        }
    }
    
    return false;
};