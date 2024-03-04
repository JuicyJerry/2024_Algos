// TRY 1: FAILED
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // sorting like desc
    // nested loop for sum of each element 
    // comparing sum and target 
    // if sum >= target: cnt++
    // let set = new Set(nums); 
    // let duplicated = [...set].sort((a, b) => b - a);
    let duplicated = nums.sort((a, b) => b - a);
    // let duplicated = nums;
    let len = duplicated.length;
    let result = [];

    console.log('duplicated ---> ', duplicated);
    for (let i = 0; i < len; i++) {
        let tempArr = [];
        let sum = duplicated[i];

        console.log('\nresult ---> ', result);
        if (sum >= target) {
            result.push(1);
            continue;
        } 
        tempArr.push(duplicated[i]);

        for (let j = 0; j < len; j++) {
            if (i !== j) {
                console.log('j  ---> ', j);
                console.log('tempArr (0) ---> ', tempArr);

                sum += duplicated[j];
                tempArr.push(duplicated[j]);
            
                if (sum >= target) {
                    console.log('tempArr (1 - 1) ---> ', tempArr);
                    console.log('tempArr (1 - 2) ---> ', tempArr);
                    break;
                } 
            }
            
        }
        console.log('tempArr (2) ---> ', tempArr);
        if (tempArr.length > 1 && sum >= target) {
            result.push(tempArr.length);
        }
    }

    console.log('result ---> ', result);

    if (result.length === 0) result.push([]);
    let min = Math.min(...result);
    console.log('min ---> ', min);
    return min;
};

// SOLUTION 1
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let shortedLen = Infinity;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            shortedLen = Math.min(shortedLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    console.log(shortedLen);
    return shortedLen === Infinity ? 0 : shortedLen;
};