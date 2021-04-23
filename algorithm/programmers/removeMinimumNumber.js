/*
출력받을 배열은 내림차순으로 정렬이 되면 안된다.
즉 [1,5,7,3,2,6]이 [7,6,5,3,2]가 아니라
result = [5,7,3,2,6] 이 결과로 출력되어야 합니다~
 */

function solution7(arr) {
   
    let sorted_arr = arr.slice();
   sorted_arr.sort((a,b) => a-b)
   let idxForRemove = arr.indexOf(sorted_arr[0])
   arr.splice(idxForRemove, 1)
   if(arr.length === 0) return [-1];
   else return arr;

}

let a = [1,5,7,3,2,6];
let b = [10];
//console.log('result: '+solution7(b));



function s(arr) {
   arr.splice(arr.indexOf(Math.min(...arr)),1);
   if(arr.length<1)return[-1];
   return arr;
}

////console.log('result: '+s(a));