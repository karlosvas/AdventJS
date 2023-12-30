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


const result1 = organizeGifts(`76a11b`)
console.log(result1)
'[a]{a}{a}(aaaaaa){b}(b)'

// Explicación:
// 76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé[a](por las primeras 5 cajas), 2 cajas sueltas { a } { a } y una bolsa con 6 regalos(aaaaaa)

// 11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta { b } y una bolsa con 1 regalo(b)