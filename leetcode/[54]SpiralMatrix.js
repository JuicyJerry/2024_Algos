// SOLUTION 1: Set Up Boundaries
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [up, left, right, down] = [0, 0, cols - 1, rows - 1];

    while (res.length < rows * cols) {
        for (let col = left; col <= right; col++) {
            console.log("up, col ===> ", up, col);
            res.push(matrix[up][col]);
        }
        console.log("res (1) ===> ", res, '\n');

        for (let row = up + 1; row <= down; row++) {
            console.log("row, right ===> ", row, right);
            res.push(matrix[row][right]);
        }
        console.log("res (2) ===> ", res, '\n');

        console.log("up, down ===> ", up, down);
        if (up != down) { // check not on a row that has already been traversed
            for (let col = right - 1; col >= left; col--) {
                console.log("down, col ===> ", down, col);
                res.push(matrix[down][col]);
            }
        }
        console.log("res (3) ===> ", res, '\n');

        console.log("left, right ===> ", left, right);
        if (left != right) { // check not on a col that has already been traversed
            for (let row = down - 1; row > up; row--) {
                console.log("row, left ===> ", row, left);
                res.push(matrix[row][left]);
            }
        }
        console.log("res (4) ===> ", res, '\n');

        console.log("direction (1) ===> ", left, right, up, down);
        // Updating Boundaries : each traversal of the outer layer peels it away and moves inward to the next layer
        left++;
        right--;
        up++;
        down--;
        console.log("direction (2) ===> ", left, right, up, down);
    }
    
    console.log("res ===> ", res);
    return res;
};

/*
    Let M be the number of rows and N be the number of columns.
    Time complexity: O(M⋅N). This is because we visit each element once.
    Space complexity: O(1). This is because we don't use other data structures. Remember that we don't include the output array in the space complexity.
*/



// SOLUTION 2: Mark Visited Elements




/*
    Let M be the number of rows and N be the number of columns.
    Time complexity: O(M⋅N). This is because we visit each element once.
    Space complexity: O(1). This is because we don't use other data structures. Remember that we don't include the output array in the space complexity.
*/