function isPrime(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0)
            cnt++;
    }
    if (cnt > 2)
        return false;
    return true;
}

function primeFactor(n) {
    let arr = [];
    for (let i = 2; i < n; i++) {
        if (n % i == 0 && isPrime(i)) {
            arr.push(i);
        }
    }
    return arr.join(",");
}

console.log(primeFactor(10));