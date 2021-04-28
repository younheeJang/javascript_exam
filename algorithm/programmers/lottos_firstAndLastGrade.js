function solution21(lottos, win_nums) {
    let sorted_lottos = lottos.sort((a,b) => a-b);
    let sorted_win_nums = win_nums.sort((a,b) => a-b);
    let matched_nums = [];
    let possiblity = 0;
    let minimum_triumph, maximum_triumph;
    
    for(let i=0; i<6; i++){
      matched_nums.push(...sorted_lottos.filter((v)=>v!==0).filter((v)=>v===sorted_win_nums[i]));
      possiblity = sorted_lottos.filter(v => v===0).length;  
    }
    
    if(matched_nums.length !== 0){
      minimum_triumph = 6 - matched_nums.length + 1;
    }else {
      minimum_triumph = 6;
    }
    if(matched_nums.length+possiblity === 0) maximum_triumph = 6;
    else{maximum_triumph = 6 - matched_nums.length - possiblity + 1;}
    let answer = [maximum_triumph, minimum_triumph];
    return answer;
}
​