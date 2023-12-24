function getIndexsForPalindrome(word) {
    let reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) return [];

    for (let salto = 1; salto <= word.length; salto++) {
        for (let r = 0; r <= word.length; r++) {
            let newWord = word.slice(0, r) + word[r + salto] + word.slice(r + 1, r + salto) + word[r] + word.slice(r + salto + 1, word.length);
            let reverseWord = newWord.split("").reverse().join("");
            if (newWord == reverseWord) return [r, r + salto];
        }
    }

    return null;
}

console.log(getIndexsForPalindrome('abab')) // 0,1// baab
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaababa')) // 1,3
console.log(getIndexsForPalindrome('rotaratov')) // 4,8 // rotavator