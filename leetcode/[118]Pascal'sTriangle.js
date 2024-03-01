// Try 1
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result.push([]);
    }
    result[0].push(1) ;
    if (numRows === 1) return result;
    result[1].push(1) ;
    console.log('result ===> ', result);
    let i = 2;
    while (result[result.length - 1] !== numRows) {
        result[i].push(result[i - 2] + result[i - 1]); 
        console.log("result ===> ", result);
    }

    console.log("result ===> ", result);
    return result;
};

// SOLUTION 1
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];

    for (let i = 1; i < numRows; i++) {
        let temp = [];
        temp.push(1);

        if (i >= 2) {
            for (let j = 0; j < i - 1; j++) {
                temp.push(result[i - 1][j] + result[i - 1][j + 1]);
            }
        }
        temp.push(1);
        result.push(temp);
    }
    
    return result;
};