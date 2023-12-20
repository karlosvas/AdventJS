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