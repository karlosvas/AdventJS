function revealSabotage(store) {
    let incX = [-1, -1, -1, 0, 1, 1, 1, 0];
    let incY = [-1, 0, 1, 1, 1, 0, -1, -1];
    let Y = store.length;
    let X = store[0].length;

    for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
            if (store[y][x] != "*") {
                for (let p = 0; p < 8; p++) {
                    let nx = x + incX[p];
                    let ny = y + incY[p];
                    if (nx < 0 || nx >= X || ny < 0 || ny >= Y) continue;
                    if (store[ny][nx] == "*") store[y][x]++
                    store[y][x] = store[y][x].toString();
                }
            }
        }
    }

    return store
}
console.log(revealSabotage([
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]))