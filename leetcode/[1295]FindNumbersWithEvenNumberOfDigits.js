// SOLUTION 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCnt = 0;
    nums.forEach((el) => {
        if (el.toString().length % 2 === 0) evenCnt++;
    })

    return evenCnt;
};
