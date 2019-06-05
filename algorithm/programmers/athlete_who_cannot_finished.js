var a = ["mislav", "stanko", "mislav", "ana"];
var b = ["stanko", "ana", "mislav"];
function solution(participant, completion) {
     var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0; i<completion.length; i++){
      for(var j = 0; j<participant.length; j++){
        if(completion[i] === participant[j]){
          var idx = participant.indexOf(participant[j]);
          participant.splice(idx, 1);
        }
      }
    answer = participant[0];
    }
    return answer;
}

solution(a, b);

function solution(participant, completion) {
    participant.sort(); 
    completion.sort(); 
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

solution(a, b);