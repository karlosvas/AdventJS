function maxDistance(movements) {
    let left = 0, right = 0;

    for (let mov of movements) {
        if (mov == ">") right++, left--;
        else if (mov == "*") right++, left++;
        else right--, left++;
    }

    if (left > right) return left;
    return right;
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5