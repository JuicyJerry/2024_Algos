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
            res.push(matrix[up][col]);
        }

        for (let row = up + 1; row <= down; row++) {
            res.push(matrix[row][right]);
        }

        console.log("up, down ===> ", up, down);
        if (up != down) { // check not on a row that has already been traversed
            for (let col = right - 1; col >= left; col--) {
                // console.log("down, col ===> ", down, col);
                res.push(matrix[down][col]);
            }
        }
        // console.log("res (3) ===> ", res, '\n');

        console.log("left, right ===> ", left, right);
        if (left != right) { // check not on a col that has already been traversed
            for (let row = down - 1; row > up; row--) {
                // console.log("row, left ===> ", row, left);
                res.push(matrix[row][left]);
            }
        }
        
        // console.log("direction (1) ===> ", left, right, up, down);
        // Updating Boundaries : each traversal of the outer layer peels it away and moves inward to the next layer
        left++;
        right--;
        up++;
        down--;
        console.log("res (4) ===> ", res, '\n');
        // console.log("direction (2) ===> ", left, right, up, down);
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
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let visited = 101; // marking value
    let rows = matrix.length;
    let columns = matrix[0].length;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let currentDirection = 0;
    let changeDirection = 0; // the time changing the direction
    let row = 0;
    let col = 0;
    let result = [];
    result.push(matrix[0][0]);
    matrix[0][0] = visited;

    while (changeDirection < 2) {
        while (
            row + directions[currentDirection][0] >= 0 && 
            row + directions[currentDirection][0] < rows &&
            col + directions[currentDirection][1] >= 0 &&
            col + directions[currentDirection][1] < columns &&
            matrix[row + directions[currentDirection][0]]
            [col + directions[currentDirection][1]] != visited) {
                changeDirection = 0; // reset every step
                row = row + directions[currentDirection][0]; // move next step
                col = col + directions[currentDirection][1]; // move next step
                result.push(matrix[row][col]);
                matrix[row][col] = visited;
            }
        currentDirection = (currentDirection + 1) % 4; // chagne direction
        changeDirection++;
    }
    return result; 
};



/*
    Let M be the number of rows and N be the number of columns.
    Time complexity: O(M⋅N). This is because we visit each element once.
    Space complexity: O(1). This is because we don't use other data structures. Remember that we don't include the output array in the space complexity.
*/

// SOLUTION 3 : Why i get time exceeding error using if statement in for loop
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [up, down, left, right] = [0, rows - 1, 0, cols - 1];

    while (result.length < rows * cols) {
        // rightaward
        for (let col = left; col <= right; col++) {
            result.push(matrix[up][col]);
        }
        
        // downaward
        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right]);
        }

        if (up != down) {
            // leftaward
            for (let col = right - 1; col >= left; col--) {
                result.push(matrix[down][col]);
            }
        }

        if (left != right) {
            // upaward
            for (let row = down - 1; row > up; row--) {
                result.push(matrix[row][left]);
            }
        }

        left++, right--, up++, down--;
    }
    
    return result;
};