function shortestPath(grid: number[][], k: number): number {
    let m = grid.length;
    let n = grid[0].length;
    let visited = Array.from({ length: m }, () => Array(n).fill(Infinity));

    if(k >= m + n - 2) return m + n - 2;

    let queue = [[0, 0, 0, 0]];
    let directions = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
    ]
    while(queue.length != 0) {
        const [row, col, usedObstacles, steps] = queue.shift();
        if (row === m - 1 && col === n - 1) return steps;
        for(let dir of directions) {
            let newRow = row + dir[0];
            let newCol = col + dir[1];
            let newSteps = steps + 1;
            let newUsedObstacles = usedObstacles;

            if(newRow > m - 1 || newRow < 0 || newCol > n - 1 || newCol < 0) continue;
            if(grid[newRow][newCol] == 1) {
                if(k - usedObstacles <= 0) continue;
                else newUsedObstacles++;
            }
            if(visited[newRow][newCol] <= newUsedObstacles) continue;

            visited[newRow][newCol] = newUsedObstacles;
            queue.push([newRow, newCol, newUsedObstacles, newSteps]);
        }
    }
    return -1;
};