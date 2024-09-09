// SOLUTION 1 : By myself
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    /** 
        Using twopointer technique
        left, right
        sorting nums
        looping for combinations with two pairs in min function
        calculating sum of min function
        comparing each results
        finding maximum sum
    */
    /*
        pattern
        -> 제일 작은 수 기준으로 짝을 만든다, 나머지 중 제일 작은 수 기준으로 짝을 만든다 (반복)
        -> 각 짝별로 작은 수를 더한다
    */
    
    nums.sort((a, b) => a - b);
    let results = [];
    let left = 0;
    let right = 1;

    while (nums.length > 0) {
        if (nums[left] > nums[right]) results.push(nums[right]);
        else if (nums[left] < nums[right]) results.push(nums[left]);
        else results.push(nums[left]);
        nums.shift();
        nums.shift();
    }
    return results.reduce((acc, cur) => acc + cur, 0);
};



// SOLUTION 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0, sum = 0;
    while (nums.length > i) {
        sum += nums[i];
        i += 2;
    }
    return sum;
};

// 시간 복잡도: O(logN)
// 공간 복잡도: O(N)