// TRY1: TIME LIMIT EXCEEDED
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /*
        loop {
            move to right one step
            
            if last step {
                last element move to first place
            }
        }
    */

    for (let i = 0; i < k; i++) {
        for (let j = nums.length - 1; j >= 1; j--) {
            let temp = nums[j];
            nums[j] = nums[j - 1];
            nums[j - 1] = temp;
        }
    }
    
};


// SOLUTION 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let start = 0;
    let end = nums.length;
    k = k % end;
    
    if (k === 0) return;
    reverse(nums, start, end - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, end - 1);
};

const reverse = (nums, start, end) => {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
// Time complexity: O(n)
// Space complexity: O(1)