function solution(citations) {
    citations.sort((a, b) => b - a); 
    let answer = 0;
    while(answer <= citations.length){
        if(answer + 1 <= citations[answer]){
            console.log(index, index+1, citations[index])
            answer++;   
        }else break;
    }
   
    return answer;
}

let a5 = [1,1,1,50, 55,0,33,33,200,700,5];
/*
0 1 700
1 2 200
2 3 55
3 4 50
4 5 33
5 6 33
*/

/*
배열 안의 요소들은 숫자이다.

ㅁ가장 큰 숫자부터 내림차순으로 배열 안의 요소들을 정렬한다. 

ㅁ가장 큰 숫자부터 해당 숫자가 몇 번 나왔는지 포함해서 카운트 들어간다.(answer)

ㅁ작은 숫자로 가게될 수록 answer는 커지게 되고, 

ㅁanswer의 숫자가 비교할 배열 안의 숫가보다 크면, breakd을 걸어 답을 낸다.
*/
