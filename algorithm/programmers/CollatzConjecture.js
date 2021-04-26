function solution(num) {
    let cnt = 0;
    while(num !== 1 || cnt === 500){
      let isEven = Math.floor(num%2)?false:true;
      if(isEven===true){
        num = Math.floor(num/2);
        cnt++;
        if(cnt===500) return -1
      }
      else if(isEven===false){
        num = num*3+1;
        cnt++; 
        if(cnt===500) return -1
      }
    }    
    return cnt;
  }