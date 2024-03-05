// TRY 1 
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let sum = 0;
    
    for (let left = 0; left < numbers.length; left++) {
        let right = 0;
        sum = numbers[left];
        console.log("sum (1) ", sum);
        while (right < numbers.length) {
            if (left != right) {
                sum += numbers[right];
                console.log("sum (2) ", sum);
                if (sum === target && left != right) return [left + 1, right + 1];
                sum -= numbers[right];
            } 
            right++;
        }
    }

    return [];
};

// SOLUTION 1 : TWO POINTERS
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let sum = 0;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (left != right && sum === target) {
            console.log("sum (2) ", sum);
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
        sum -= numbers[right];
    }

    return [];
};

// Time Complexity: O(N)
// Space Complexity: O(1)

// SOLUTION 2
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let sum = 0;
    
    while (left < right) {
        sum = numbers[left] + numbers[right];     

        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
    
    return [];
};