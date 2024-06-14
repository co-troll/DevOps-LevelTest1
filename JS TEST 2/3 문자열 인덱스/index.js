const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let count = 0;
console.log("입력");
rl.on("line", (line) => {
    input.push(line);
    count += 1;
    if (count == 2) {
        rl.close();
    }
}).on("close", () => {
    let [sentence, word] = input;
    let result = sentence.replace(word, "*");
    console.log(result.indexOf("*"));
})
