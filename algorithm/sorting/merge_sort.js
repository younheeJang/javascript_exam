function merge_sort(array){
	//더 이상 쪼갤 수 없을 때, 
	if(array.length < 2){
		return array;
	}
	var mid = Math.floor((array.length)/2),
		left = array.slice(0, mid),
		right = array.slice(mid);
	return merge(left, right);
}


function merge(left, right){
	var res = [], leftIdx = 0, rightIdx = 0;
	//일단 제대로 된 영역 안에 이 아이가 위치해 있을 경우. 
	while(left[leftIdx] < left.length && right[rightIdx] < right.length){
		//조건에 따라 left와 right로 어레이를 나눠 res배열에 푸시한다. 
		if(left[leftIdx] < right[rightIdx]){
			res.push(left[leftIdx++]);
		}else{
			res.push(right[rightIdx++]);
		}
	}
	var remainL = left.slice(leftIdx),
		remainR = right.slice(rightIdx);

	return res.concat(remainL).concat(remainR);
}

merge_sort([6,1,23,4,2,3]);