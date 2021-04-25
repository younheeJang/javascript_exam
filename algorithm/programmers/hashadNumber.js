
function solution(x) {
    let norm = 0;
    for(let i=0; i<x.toString().length; i++){
      norm += Number(x.toString().charAt(i))
    }
    return x%norm?false:true;
}