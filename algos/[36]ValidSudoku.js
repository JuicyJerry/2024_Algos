// TRY1: FAIL [Hashset]

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let N = 9;
    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();

    for (let p = 0; p < N; p++) {
        rows[p] = new Set();
        cols[p] = new Set();
        boxes[p] = new Set();
    }

    for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
            let val = board[j][i];

            if (val === '.') continue;
            console.log('j, i  ---> ', j, i);
            if (rows[j].has(val)) return false;
            rows[j].add(val);
            if (cols[j].has(val)) return false;
            cols[j].add(val);

            let idx = Math.floor(j / 3) * 3 + Math.floor(i / 3);
            console.log('idx ---> ', idx);

            if (boxes[idx].has(val)) return false;
            boxes[idx].add(val);
        }

        console.log('rows ---> ', rows);
        console.log('cols ---> ', cols);
        console.log('boxes ---> ', boxes);
        console.log('\n');
    }
    
    return true;
};

// Time Complexity: O(N^2)
// Space Complexity: O(N^2)
