

/*
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,
 */
function getEachAnswerList(max, answer){
    if(max === answer.length){ return answer}
    else if(max > answer.length){ 
      //더 길 때는 해당 리스트 반복해서 늘려야 한다.
      for(let i=0; i<max-5; i++){  
        answer.push(answer[i])
      } 
      return answer;
    }
    else if(max < answer.length){ 
      answer = answer.slice(0, max)
      return answer;
    }
}
function solution(answers) {
    let answer =[];
    let peopleAnswerArray = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let peopleAnswerSheetArray = [];
    let answersLength = answers.length;
    let correct = 0;
    let Obj = {};
    for(let i=0; i<peopleAnswerArray.length; i++){
      peopleAnswerSheetArray.push(getEachAnswerList(answersLength, peopleAnswerArray[i]));
    }
   
    for(let i=0; i<peopleAnswerSheetArray.length; i++){    
      for(let j=0; j<peopleAnswerSheetArray[i].length; j++){
        if(answers[j]===peopleAnswerSheetArray[i][j]){
          correct++;  
        }
      }
      Obj[i+1] = correct;
      correct = 0;
    }

    //답이 다 같은 경우, 답이 일부만 다른 경우, 답이 아예 다 다른 경우. 일등이 무조건 앞으로 정렬된 어레이가 각 경우에 따라 리턴방식이 달라야 한다.
    const sortable = Object.entries(Obj).sort(([,a],[,b]) => b-a)
    
    if(sortable[0][1]===sortable[1][1]&&sortable[0][1]!==sortable[2][1]){
      answer.push(Number(sortable[0][0]), Number(sortable[1][0]))
      return answer
    }else if(sortable[0][1]===sortable[2][1]&&sortable[0][1]!==sortable[1][1]){
      answer.push(Number(sortable[0][0]), Number(sortable[2][0]))
      return answer
    }else if(sortable[0][1] === sortable[1][1] && sortable[0][1] === sortable[2][1]){
      answer.push(Number(sortable[0][0]),Number(sortable[1][0]),Number(sortable[2][0]))
      return answer;
    }else if(sortable[0][1]!==sortable[1][1]&&sortable[0][1]!==sortable[2][1]){
      answer.push(Number(sortable[0][0]))
      return answer;
    }
}
