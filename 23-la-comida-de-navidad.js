function organizeChristmasDinner(dishes) {
    let res = [];
    let map = {};

    for (let recipes of dishes.sort()) {
        for (let ingredient of recipes) {
            if (ingredient == recipes[0]) continue;
            if (!map[ingredient]) map[ingredient] = [ingredient, [recipes[0]]];
            else {
                map[ingredient][1].push(recipes[0])
            }
        }
    }

    for (let ingredient in map) {
        if (map[ingredient][1].length > 1) res.push(map[ingredient].flat())
    }

    return res.sort()
}

console.log(organizeChristmasDinner([
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"]
]))
