function checkIsValidCopy(original, copy) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "x", "y", "z"]
    const symb = ["#", "+", ":", ".", " "]
    const resto = Math.abs(copy.length - original.length)

    for (let o = 0; o < original.length + resto; o++) {

        if (!isNaN(original[o]) && original[o] != " ") continue;

        let char = original[o]
        let copChar = copy[o]

        if (alphabet.includes(char) && char != copChar && !symb.includes(copChar)) return false;
        else if (symb.includes(char) && symb.indexOf(copChar) < symb.indexOf(char)) return false;
        else if (char >= 'a' && char <= 'z' && copChar >= "A" && copChar <= "Z") return false;
        else if (char.toLowerCase() != copChar.toLowerCase() && !symb.includes(copChar)) return false;
    }

    return true
}

console.log(checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")) //fasle
console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")) //true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false
console.log(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')) // false
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // fasle
console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#"))
console.log(checkIsValidCopy("Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños", "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño")) // false

