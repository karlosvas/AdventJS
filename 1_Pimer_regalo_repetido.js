function findFirstRepeated(gifts) {
    let newGifts = [];
    for (let element of gifts) {
        if (!newGifts.includes(element)) {
            newGifts.push(element);
        } else {
            return element;
        }
    }
    return -1;
}