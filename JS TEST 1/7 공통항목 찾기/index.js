function commonElements(kArray) {
    let kArrayLength = kArray.length;
    let startArr = kArray[0];
    let checkArr = [];
    let result = {};
    let resultArr = [];
    for (let value of startArr) {
        for (let i = 1; i < kArrayLength; i++) {
            for (let j = 0; j < kArray[i].length; j++) {
                if (value == kArray[i][j]) {
                    checkArr.push(value);
                }
            }
        }
    }
    for (let value of checkArr) {
        result[value] = (result[value] || 0) + 1;
    }
    for (const key in result) {
        if (result[key] >= kArrayLength - 1) {
            resultArr.push(Number(key));
        }
    }
    return resultArr;
}

console.log(commonElements([[1,2,3,3],[2,3,4,5],[2,3,4,7,8]]));