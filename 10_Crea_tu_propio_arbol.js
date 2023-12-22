function createChristmasTree(ornaments, height) {
    let res = "";
    let change_or = 0;
    let start_tree = height - 1;
    let stop_tree = 2;
    let start, it, count_stop;

    for (let h = 0; h <= height; h++) {

        start = false;
        it = 0;
        count_stop = 1;

        for (let w = 0; w < height * 2; w++) {
            if (h == height) {
                res += " "
                if (w == height - 2) {
                    res += "|"
                    break;
                }
                continue;
            }

            if (w == start_tree) start = true;

            if (start) {
                if (count_stop == stop_tree) continue;

                if (it % 2 == 0) {
                    res += ornaments[change_or]
                    change_or++;
                    count_stop++;
                    if (change_or == ornaments.length) change_or = 0;
                } else {
                    res += " "
                }

                it++;
            } else {
                res += " "
            }

        }
        stop_tree++;
        if (start_tree > 0) start_tree--;
        res += "\n";
    }

    return res;
}

console.log(createChristmasTree("x", 3));