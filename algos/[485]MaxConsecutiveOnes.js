/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let maxCnt = 0;
    
    // 1의 연속된 갯수
    // 1이면 무조건 플러스 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            cnt++;
        } else {
            cnt = 0;
        }
        
        if (cnt > maxCnt) {
            maxCnt = cnt;
        }
    }
    return maxCnt;    
};