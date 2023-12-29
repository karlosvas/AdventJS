function drawClock(time) {
    let clock = Array.from({ length: 7 }, () => Array(17).fill(' '));
    let Y = clock.length;
    let X = clock[0].length

    for (let y = 0; y < Y; y++) {
        let it = 0;
        let state = 0;
        let hour = time[state];
        let drawClock = true

        for (let x = 0; x < X; x++) {
            if (drawClock) {
                it++;
                switch (hour) {
                    case "0":
                        if (y == 0 || y == Y - 1 || it == 3 || it == 1) clock[y][x] = "*"
                        break;
                    case "1":
                        if (it == 3) clock[y][x] = "*"
                        break;
                    case "2":
                        if (y == 0 || y == Y - 1 || y == 3 || it == 1 && y > 2 || it == 3 && y < 4) clock[y][x] = "*"
                        break;
                    case "3":
                        if (y == 0 || y == Y - 1 || y == 3 || it == 3) clock[y][x] = "*"
                        break;
                    case "4":
                        if (it % 2 != 0 && y < 3 || y == 3 || it == 3) clock[y][x] = "*"
                        break;
                    case "5":
                        if (y == 0 || y == Y - 1 || y == 3 || it == 1 && y < 4 || it == 3 && y > 2) clock[y][x] = "*"
                        break;
                    case "6":
                        if (y == 0 || y == Y - 1 || it == 1 || y == 3 || it == 3 && y > 2) clock[y][x] = "*"
                        break;
                    case "7":
                        if (y == 0 || it == 3) clock[y][x] = "*"
                        break;
                    case "8":
                        if (y == 0 || y == Y - 1 || y == 3 || it % 2 != 0) clock[y][x] = "*"
                        break;
                    case "9":
                        if (y == 0 || y == Y - 1 || y == 3 || it == 3 || it == 1 && y < 4) clock[y][x] = "*"
                        break;
                    case ":":
                        it += 2
                        break;
                }
                if (it % 3 == 0 && it != 0) {
                    state++;
                    hour = time[state]
                    drawClock = false;
                }
            } else {
                drawClock = true, it = 0;
            }
        }
    }
    clock[2][8] = '*';
    clock[4][8] = '*';
    return clock
}