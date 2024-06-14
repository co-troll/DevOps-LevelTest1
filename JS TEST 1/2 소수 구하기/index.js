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

console.log(isPrime(31));
console.log(isPrime(10));