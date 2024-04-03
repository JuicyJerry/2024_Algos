/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

const DIR = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const EMPTY = 2147483647;
const GATE = 0;
const inbound = (arr, i, j) => i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;
 
var wallsAndGates = function(rooms) {
    if (!rooms || rooms.length === 0) return;
    const queue = [];
    const m = rooms.length, n = rooms[0].length;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === GATE) queue.push([row, col]); 
        }
    }
    
    
    while (queue.length) {
        const [gateRow, gateCol] = queue.shift();
        
        for (let [dx, dy] of DIR) {
            const r = gateRow + dx;
            const c = gateCol + dy;  
            
            if (!inbound(rooms, r, c) || rooms[r][c] !== EMPTY) continue;
            queue.push([r, c]);
            rooms[r][c] = rooms[gateRow][gateCol] + 1;
        }
    }
};

// Time Complexity: O(mn) // 걸리는 시간 + 입력의 크기 사이의 관계
// Space Complexity: O(mn) // 메모리 사용량 + 크기 사이 관계