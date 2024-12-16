function autonomousDrive(store, movements) {
  let it = -1, R = -1;
  for (let line in store) {
    R = store[line].indexOf("!");
    if (R != -1) {
      it = parseInt(line);
      break;
    }
  }

  for (let m of movements) {
    if (it == -1) break;
    let Y = store[it];

    switch (m) {
      case "R":
        if (R + 1 < Y.length && Y[R + 1] != "*") {
          Y = Y.slice(0, R) + "." + Y.slice(R + 1, R + 1) + "!" + Y.slice(R + 2);
          R++;
        }
        break;
      case "L":
        if (R - 1 >= 0 && Y[R - 1] != "*") {
          Y = Y.slice(0, R - 1) + "!" + Y.slice(R, R) + "." + Y.slice(R + 1);
          R--;
        }
        break;
      case "U":
        if (it > 0 && store[it - 1][R] != "*") {
          Y = Y.slice(0, R) + "." + Y.slice(R + 1);
          store[it] = Y;
          it--;
          Y = store[it];
          Y = Y.slice(0, R) + "!" + Y.slice(R + 1);
        }
        break;
      case "D":
        if (it < store.length - 1 && store[it + 1][R] != "*") {
          Y = Y.slice(0, R) + "." + Y.slice(R + 1);
          store[it] = Y;
          it++;
          Y = store[it];
          Y = Y.slice(0, R) + "!" + Y.slice(R + 1);
        }
        break;
    }
    store[it] = Y;
  }

  return store
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
// [
//   ".......",
//   "...*!*."
// ]

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.