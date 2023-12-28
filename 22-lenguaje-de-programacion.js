function compile(code) {
    let c = 0, pointReturn = 0;
    let conditional = false, validConditional = false;
    for (let i = 0; i < code.length; i++) {
        let e = code[i];
        if (!conditional || validConditional) {
            if (e == "+") c++;
            else if (e == "*") c *= 2;
            else if (e == "-") c--;
            else if (e == "%") pointReturn = i;
            else if (e == "<" && pointReturn != 0) i = pointReturn, pointReturn = 0;
            else if (e == "¿") {
                conditional = true;
                if (c > 0) validConditional = true;
            }
        } else if (e == "?") conditional = false, validConditional = false;
    }
    return c;
}

console.log(compile('--¿+++?+++¿--?')) // -1