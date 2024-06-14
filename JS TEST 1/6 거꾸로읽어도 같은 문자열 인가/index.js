function isPalindromeREcursive(word) {
    let arr = [...word];
    return isPalindromeREcursiveHelper(arr, 0, arr.length - 1);
}

function isPalindromeREcursiveHelper(word, beginPos, endPos) {
    if (beginPos == endPos || beginPos > endPos) return true;

    if (word[beginPos] != word[endPos]) {
        return false
    }
    return isPalindromeREcursiveHelper(word, beginPos + 1, endPos - 1);

}

console.log(isPalindromeREcursive("apadadapa"))