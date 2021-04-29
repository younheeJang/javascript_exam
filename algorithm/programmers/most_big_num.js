function solution(numbers) {
    let answer = '';
    numbers.map(e => e.toString()).sort((a,b)=>(b+a)-(a+b)).forEach((v) => answer += v);
    return answer.replace(/^0+/, 0);
}