function findNaughtyStep(original, modified) {
    let test = "";

    for (let i = 0; i < original.length; ++i) {
        if (original[i] != modified[i]) {
            if (original[i + 1] != undefined && original[i + 1] == modified[i]) {
                return original[i];
            } else {
                return modified[i];
            }
        }
    }

    for (let i = 0; i < modified.length; ++i) {
        if (modified[i] != original[i]) {
            return modified[i];
        }
    }

    return "";
}

console.log(findNaughtyStep('stepfor', 'stepor'))