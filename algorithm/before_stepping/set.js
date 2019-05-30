function setIntersection(a, b){
	var intersectionSet = new Set();
	for(var ele of b){
		if(a.has(ele)){
			intersectionSet.add(ele);
		}
	}
	return intersectionSet;
}
//교집합
//var a = new Set([1,5,7,8]);
//var b = new Set([0,5,8,9]);
//setIntersection(a, b);


//하나의 셋에 다른 하나의 셋의 모든 요소가 들어있는지의 여부를 불리언으로 판별해 리턴
function isSuperSet(a, b){
	for(var ele of b){
		if(!a.has(ele)){
			return false;
		}
	}
	return true;
}

//테스팅 시나리오.
//var a = new Set([1,5,7,8]);
//var b = new Set([5,7]);
//isSuperSet(a,b); -> true
//isSuperSet(b,a); -> false

function unionSet(a, b){
	var union = new Set(a);
	for(var ele of b){
		union.add(ele);
	}
	return union;
}

//셋이라는 자료 구조의 특성상, 합집이어도 당연히... 중복된 값은 빠진다.
//테스팅 시나리오.
//var a = new Set([7,8,9]);
//var b = new Set([5,7,10]);
//u = unionSet(a,b); -> {5,7,8,9,10}
//[...u].sort() -> 정렬.


function differenceSet(a, b){
	var differenceSet = new Set(a);
	for(var ele of b){
		differenceSet.delete(ele);
	}
	return differenceSet;
}

//var a = new Set([7,8,9]);
//var b = new Set([5,7,10]);
//differenceSet(a,b); -> {8,9}



