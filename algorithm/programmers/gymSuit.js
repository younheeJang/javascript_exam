function solution(n, lost, reserve) {  
    //서로 중복되는 요소를 제거한다.
    const removeLostDuplication = lost.filter( (s) => (reserve.indexOf(s) === -1))
    const removeReserveDuplication= reserve.filter( (s) => (lost.indexOf(s) === -1))
    
    removeLostDuplication.sort()
      
      //기본적으로 체육복을 도난당한 학생을 총 학생수에서 빼면 단순히 정답.
    let answer = n-removeLostDuplication.length
    
    //도난당한 학생의 번호를 기준으로 해당 번호 앞 뒤의 숫자가
    //, 여분의 체육복이 있는 학생의 정보가 담긴 배열에 있는지 검사한다. 
    //이미 여분의 체육복을 빌려준 학생은, 여분의 체육복이 없어졌으므로, 여분의 체육복이 있는
    //학생의 정보가 담긴 배열에서 지운다.
    removeLostDuplication.forEach(student => {
  
      if (removeReserveDuplication.indexOf(student-1) >= 0) {
        answer ++
  
      } else if (removeReserveDuplication.indexOf(student+1) >= 0) {
          answer ++
          let studentNotReservedAnymore = removeReserveDuplication.indexOf(student+1)
          removeReserveDuplication.splice(studentNotReservedAnymore, 1)
      }
    })
    return answer;
  }
  