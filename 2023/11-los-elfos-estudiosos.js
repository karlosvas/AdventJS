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

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null