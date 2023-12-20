function cyberReindeer(road, time) {
    let reinder = [];
    let it = -1;
    let unitTime = 0;
    while (time > 0) {
        let newRoad = "";

        if (unitTime >= 5 || road[it + 1] != "|") it++;

        for (let i = 0; i < road.length; i++) {
            if (it == i) newRoad += "S"
            else if (road[i] == "S") newRoad += ".";
            else if (unitTime >= 5 && road[i] == '|') {
                newRoad += '*';
            } else {
                newRoad += road[i];
            }
        }

        reinder.push(newRoad);
        time--;
        unitTime++;
    }
    return reinder;
}