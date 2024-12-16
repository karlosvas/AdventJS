function removeSnow(s: string): string {
  let queue: Array<String> = [];

  for (let c of s) {
    if (queue.length == 0) queue.push(c);
    else queue[queue.length - 1] == c ? queue.pop() : queue.push(c);
  }

  return queue.join("");
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow("zzz"); // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow("a"); // -> "a"
// No hay montículos repetidos
