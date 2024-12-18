function detectBombs(grid: boolean[][]): number[][] {
  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  let a: number[][] = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let bomba = 0;
      for (let i = 0; i < 8; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny >= 0 && ny < grid.length && nx >= 0 && nx < grid[0].length && grid[ny][nx]) {
          bomba++;
        }
      }
      a[y][x] = bomba;
    }
  }
  return a;
}
