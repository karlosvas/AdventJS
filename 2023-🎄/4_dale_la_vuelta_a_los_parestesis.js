function decode(message) {
    let newMessage = "";
    let K = [];

    for (let i = 0; i < message.length; i++) {
        if (message[i] == "(") {
            K.push(message[i]);
            let solution = [];
            let stack = [];
            let next = false;
            while (K.length > 0) {
                i++;
                if (message[i] != ")" && message[i] != "(") {
                    if (next) stack.push(message[i]);
                    else stack.unshift(message[i]);
                } else if (message[i] == ")") {
                    next = false;
                    solution.push(stack.join(""));
                    stack = [];
                    K.pop();
                } else if (message[i] == "(") {
                    solution.push(stack.join(""));
                    next = true;
                    K.push(message[i]);
                    stack = [];
                }
            }
            for (let i = solution.length - 1; i >= 0; i--) {
                newMessage += solution[i];
            }
        } else newMessage += message[i];
    }
    return newMessage;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus