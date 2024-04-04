// BFS
/**
 * @param {character[][]} grid
 * @return {number}
 */

const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

var numIslands = function(grid) {
    let islands = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                islands++;
                traverse([[row, col]], grid);
            }
        }
    }

    return islands;
};

const traverse = (queue, grid) => {
    while (queue.length) {
        const [row, col] = queue.shift();
        console.log('row, col ---> ', row, col);
        
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == '0') continue;
        grid[row][col] = "0";
        for (let [dx, dy] of dirs) {
            const r = dx + row;
            const c = dy + col;
            queue.push([r, c]);
        }
    }
}