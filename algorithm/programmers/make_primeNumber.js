
function solution16(nums){
    let cnt = 0
    let temp = []
    for(let i=0; i<nums.length; i++){
      for(let j = i+1; j<nums.length; j++){
        for(let k=j+1; k<nums.length; k++){
          temp.push(nums[i]+nums[j]+nums[k])
  
          console.log(i+" "+nums[i]+" "+j+" "+nums[j]+" "+k+"  "+nums[k]+"  ",  temp)
        }
      }
    }
  
    return temp.map((v) => isPrime(v)).reduce((a,v)=>a+v)
  
  }
  
  function isPrime(n) {
      if (n <= 1) return 0;
      if (n === 2 || n === 3) return 1;
      if (n % 2 === 0) return 0;
      let divisor = 3;
      while (n > divisor) {
          if (n % divisor === 0) return 0;	
          divisor += 2;
      }
      return 1;
  }
  