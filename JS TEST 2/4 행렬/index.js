const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

const func = (a, b) => {
    if (a[0].length != b.length) {
        return -1;
        }
    let result = Array.from(Array(a.length), () => new Array(b[0].length));
    result[0][0] = a[0][0] * b[0][0] + a[0][1] * b[1][0];
    result[0][1] = a[0][0] * b[0][1] + a[0][1] * b[1][1];
    result[1][0] = a[1][0] * b[0][0] + a[1][1] * b[1][0];
    result[1][1] = a[1][0] * b[0][1] + a[1][1] * b[1][1];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
        }
    }
    return result;
    

}

console.log(func(a,b));

// a b   e f   ( ae + bg , af + bh )
// c d   g h   ( ce + dg , cf + dh )