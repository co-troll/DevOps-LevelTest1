function base10ToString(n) {
    let arr = [];
    base10ToStringHelper(n);
    function base10ToStringHelper(n) {
        if (n == 1) return arr.push(1);
        if (n % 2 == 1) {
            n--;
            arr.push(1);
        } else {
            arr.push(0);
        }
        return base10ToStringHelper(n / 2);
    }
    return arr.reverse().join("");
}

console.log(base10ToString(100));
/* 
100
50 0
25 0
12 1
6 0
3 0
1 1
1 1 */
