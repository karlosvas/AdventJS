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

checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta Cl#us i+ comin#'
) // true
checkIsValidCopy(
    's#nta Cla#s is coming',
    'p#nt: cla#s #s c+min#'
) // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)