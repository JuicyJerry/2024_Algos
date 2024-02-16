// SOLUTINO 1
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i += 1;
        } 
    }
    console.log(arr);
};

// SOLUTION 2
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
      arr[i] === 0 && newArr.push(0);
    }
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = newArr[i];
    }
  };

// SOLUTION 3
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
      arr[i] === 0 && newArr.push(0);
    }
    
    arr = newArr.slice(0, arr.length);
  };