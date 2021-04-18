/* ㅁ내적 */

function solution(a, b) {
    let answer = 0;
    for(let i=0; i<a.length; i++){
      answer += a[i]*b[i];
    }
    
  
      return answer;
  }

  /* 월간 코딩테스트 시즌2 문제1:*/
  function solution(absolutes, signs) {
    let answer = 0;
     for(let i=0; i<absolutes.length; i++){
       if(signs[i] === false){
         absolutes[i]=absolutes[i] * (-1)
       }
       answer += absolutes[i]
     }  
     return answer;
 }

 /* ㅁ예산 */
 function solution(d, budget) {
    let temp = 0;
    let answer = 0;
    d.sort((a,b)=>a-b)
   
    for(let i=0; i<d.length; i++){
      
      temp += d[i] 
      answer++;
      if(temp>budget){
        answer--;
        break;
      }
    }
   
      return answer;
  }