
function solution8(arr) {
    let answer = 0;
    let res = arr.reduce((a,v) => a + v);
    answer = res / arr.length;
    return answer;
}