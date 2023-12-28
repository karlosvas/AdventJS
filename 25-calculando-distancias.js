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


// console.log(travelDistance(
//     `.....1....
//     ..S.......
//     ..........
//     ....3.....
//     ......2...`
// ))

// console.log(travelDistance(
//     `.....1....
// ..S.......
// ..........
// ....3.....
// ......2...`
// ))
// console.log(travelDistance(
//     `.....2....
//     ..S.......
//     ..........
//     ....1.....
//     ......3...`
// ))

// console.log(travelDistance(`S12....3`))