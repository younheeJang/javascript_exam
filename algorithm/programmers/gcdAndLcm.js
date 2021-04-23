/*
최대공약수: 공약수 중에 가장 큰 수
최소공배수: 공배수 중에 가장 작은 수
n, m 두 수의 약수 배열을 만들고, 중복되는 값 중 가장 큰 값 => 최대공약수
n, m 두 수의 곱을 최대공약수로 나눈다 => 최소공배수 
*/

function solution10(n, m) {
    let arr = [];
    let numbers = [n, m];
    let lcm, gcd = 0;
    let duplicated = [];
    for(let i=0; i<numbers.length; i++){
      for(let j=i; j<=numbers[i]; j++){
        if(numbers[i]%j===0){
          arr.find((element)=>{
            if(element === j) duplicated.push(j);
          })
          arr.push(j); 
        }  
      }  
    }
      gcd = Math.max(...duplicated);
      lcm = numbers[0]*numbers[1]/gcd;
            
      let answer = [gcd, lcm];
      return answer;
  }
  //[3, 12]
  //2	5	[1, 10]
  let n = 12;
  let m = 8;
  console.log(solution10(n,m));
  solution10(2,5);
  