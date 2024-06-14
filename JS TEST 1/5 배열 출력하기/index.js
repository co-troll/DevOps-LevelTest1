function swap(strArr, idx1, idx2) {
    let arr = strArr.slice();
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
}

function permute(strArr, begin, end) {
    if (begin == end + 1) return;
    console.log(strArr);
    console.log(swap(strArr, end, end - 1));
    let swapArr = swap(strArr, begin + 1, 0);
    permute(swapArr, begin + 1, end);
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}

permuteArray(["1", "2", "3"]);

123
132
213
231
321
312


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

