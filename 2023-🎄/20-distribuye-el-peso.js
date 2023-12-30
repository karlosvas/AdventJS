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

distributeGifts(input)

// Resultado paso a paso de los primeros cálculos:

// En la posición [0][0] tenemos el valor 4
// Sus vecinos son los valores 5 y 6
// (4 + 5 + 6) / 3 = 5

// En la posición [0][1] tenemos el valor 5
// Sus vecinos son los valores 4 y 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// En la posición [0][2] tenemos el valor 1
// Sus vecinos son los valores 5 y 3
// (1 + 5 + 3) / 3 = 3

// En la posición [1][0] tenemos el valor 6
// Sus vecinos son los valores 4, 8
// (6 + 4 + 8 ) / 3 = 6

// En la posición [1][1] tenemos el valor null
// Sus vecinos son los valores 5, 6 y 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... y así con el resto de posiciones
[
  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
]

// Resultado final tras redondear con Math.round()
[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]