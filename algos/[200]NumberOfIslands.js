// TRY2: 최적화
/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    if (!grid || !grid.length) return 0;
    
    let islands = 0;
    const row = grid.length, col = grid[0].length;
    
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (grid[i][j] === '1') {
                bfs(i, j);
                islands++;
            }
        }
    }
    function bfs(i, j) {
        const queue = [[i, j]];
        grid[i][j] = '0'; // 방문한 셀을 바로 '0'으로 변경
        
        while (queue.length) {
            const [x, y] = queue.shift();
            const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
            
            for (let [dx, dy] of directions) {
                const newX = x + dx, newY = y + dy;
                if (newX >= 0 && newX < row && newY >= 0 && newY < col && grid[newX][newY] === '1') {
                    queue.push([newX, newY]);
                    grid[newX][newY] = '0'; // 큐에 추가하는 즉시 방문 처리
                }
            }
        }
    }
    
    return islands;
};



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

// Time Complexity: O(mn) // 걸리는 시간 + 입력의 크기 사이의 관계
// Space Complexity: O(mn) // 메모리 사용량 + 크기 사이 관계
