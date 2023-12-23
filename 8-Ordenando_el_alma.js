function organizeGifts(gifts) {
    let res = ""
    let pack = ""

    for (let e of gifts) {
        let cajas = []
        if (!isNaN(parseInt(e))) pack += e;
        else {

            if (pack.length == 0) continue;

            let packInt = parseInt(pack);
            let letter = e;
            let bag = ""
            pack = "";

            for (let p = 1; p <= packInt; p++) {
                if (p % 10 == 0) {
                    cajas.push(`{${letter}}`);
                    bag = "";
                } else bag += letter;
            }

            let recorrido = cajas.length
            for (let caja = 1; caja <= recorrido; caja++) {
                if (caja % 5 == 0) {
                    res += (`[${letter}]`);
                    cajas.splice(0, 5);
                }
            }

            res += cajas.join("")
            if (bag.length < 10 && bag != "") res += `(${bag})`;
        }
    }

    return res
}

console.log(organizeGifts("76a11b"))
console.log(organizeGifts("70b120a4c"))
console.log(organizeGifts("20a"))
console.log(organizeGifts("1a1b1a2a2a"))
console.log(organizeGifts("abc"))
console.log(organizeGifts("123"))