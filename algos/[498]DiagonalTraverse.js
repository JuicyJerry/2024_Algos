// SOLUTION 1 
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (mat === null || mat.length == 0) {
        return [];
    }

    let rows = mat.length;
    let cols = mat[0].length;
    const res = new Array(rows + cols - 1).fill(null).map(() => []);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!res[i + j]) res[i + j] = [];
            res[i + j].push(mat[i][j]);
        }
    }

    for (let i = 0; i < (rows + cols - 1); i += 2) {
        if (i % 2 === 0) res[i] = res[i].reverse();
    }

    return res.flat();
};

/*
    i j
    0 0
    0 1
    1 0
    2 0
    1 1
    0 2
    1 2
    2 1
    2 2


*/

// SOLUTION 2
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let row = mat.length, col = mat[0].length;
    let res = [];
    
    for (let i = 0; i < row + col - 1; i++) {
        res[i] = [];
    }
    
    for (let m = 0; m < row; m++) {
        
        for (let n = 0; n < col; n++) {
            res[m + n].push(mat[m][n]);
        }
    }
    
    for (let i = 0; i < row + col - 1; i++) {
        if (i % 2 === 0) {
            res[i].reverse();
        }
    }
    return res.flat();
};
