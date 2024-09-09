/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let el of nums) {
        if (obj[el]) obj[el]++;
        else obj[el] = 1; 
    }
    
    for (let el in obj) {
        if (obj[el] === 1) return el;
    }
};