function solution(arr1, arr2) {
    let norm = arr1[0].length;
    let concatANDflat = arr1.concat(arr2).flat();
    let halfNorm = Math.floor(concatANDflat.length/2);
    let array = [];
    for(let i=halfNorm;  i<concatANDflat.length; i++){
        array.push(concatANDflat[i] + concatANDflat[i-halfNorm])
    }

  let answer  = new Array(Math.ceil(array.length / norm))
  .fill()
  .map(_ => array.splice(0, norm))
  
    return answer;
}