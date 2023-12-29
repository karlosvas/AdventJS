function distributeGifts(weights) {
    let sled = weights.map(row => row.slice());
    let incX = [-1, 0, 1, 0], incY = [0, 1, 0, -1];
    let Y = weights.length, X = weights[0].length;

    for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
            let media = []
            if (weights[y][x] != null) media.push(weights[y][x]);

            for (let p = 0; p < 4; p++) {
                let nx = x + incX[p], ny = y + incY[p];
                if (nx < 0 || nx >= X || ny < 0 || ny >= Y || weights[ny][nx] == null) continue;
                media.push(weights[ny][nx])
            }

            sled[y][x] = Math.round(media.reduce((acc, e) => acc + e, 0) / media.length)
        }
    }

    return sled;
}

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
]

console.log(distributeGifts(input))