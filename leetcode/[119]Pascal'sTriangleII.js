// SOLUTION 1
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    let result = [[1], [1, 1]];
    
    for (let i = 1; i < rowIndex; i += 1) {
        let temp = [];
        let left = 0;        
        temp.push(1);
        while (left < i) {
            temp.push(result[i][left] + result[i][++left]);
        }
        temp.push(1);
        result.push(temp);
    }

    return result[rowIndex];
};