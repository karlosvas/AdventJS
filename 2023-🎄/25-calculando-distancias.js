function travelDistance(map) {
    map = map.trim().split("\n")
    let kids = []
    let santa = { x: 0, y: 0 };

    for (let y = 0; y < map.length; y++) {
        const line = map[y];

        for (let x = 0; x < line.length; x++) {
            const char = line[x];

            if (!isNaN(char)) { kids.push({ kid: Number(char), x, y }) }
            else if (char === "S") santa = { x, y };
        }
    }

    kids.sort((a, b) => a.kid - b.kid)
    let movements = 0;
    for (let kid of kids) {
        movements += Math.abs(santa.x - kid.x) + Math.abs(santa.y - kid.y);
        santa = kid
    }

    return movements;
}


const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2