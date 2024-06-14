// 실패

function swap(strArr, idx1, idx2) {
    [strArr[idx1], strArr[idx2]] = [strArr[idx2], strArr[idx1]];
}

let count = 0;
function permute(strArr, begin, end) {
    let len = strArr.length;
    if (begin == end) return;
    console.log(strArr);
    for (let i = 0; i < len; i++) {
        if (!begin[i]) {
            swap(strArr, i, i + 1);
            begin[len - 1] = true;
        }
    }
    permute(strArr, begin, end);
    
    
}

function permuteArray(strArr) {
    let begin = Array(strArr.length).fill(false);
    let end = Array(strArr.length).fill(true);
    permute(strArr, begin, end);
}

permuteArray(["1", "2", "3"]);

123
132
213
231
321
312

// 01 12 01 13 01 


1234
1243
1423
1432
1342
1324

3124
3142
3412
3421
3241
3214

