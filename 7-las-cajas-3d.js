function drawGift(size, symbol) {
    const longSize = size * 2 - 1;
    const longHeight = size * 2 - 1;
    let res = "";
    let it = size - 1;
    let it2 = size * 2 - 2;

    for (let y = 0; y < longHeight; y++) {
        for (let x = 0; x < longSize; x++) {
            if (y == 0 && x >= size - 1 || y == longHeight - 1 && x < size - 1 || it == x || x == longSize - 1 && y < size || x == 0 && y >= size || it2 == x || y == size - 1 && x < size) {
                res += "#";
            } else if (y < size && it < x || y >= size && it > x || y == size - 1) {
                res += symbol;
            } else if (x < size) {
                res += " ";
            }
        }
        res += "\n";
        if (it2 > size - 1) it2--;

        if (it > 0) it--;
        if (it == 0) it = size * 2 - 2;
    }
    return res;
}
console.log(drawGift(4, "+"));