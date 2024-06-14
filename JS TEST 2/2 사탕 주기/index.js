const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("입력 : ", (answer) => {
    let arr = answer.split(" ");
    let result = {};
    console.log(arr);
    for (let value of arr) {
        result[value] = (result[value] || 0) + 1;
    }
    console.log(result);
    const resultArr = Object.values(result);
    console.log(`출력 : ${resultArr.pop() + resultArr.pop() + resultArr.pop()}`);
    rl.close();
})