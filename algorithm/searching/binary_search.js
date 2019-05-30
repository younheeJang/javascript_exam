function binary_search(array, n){
	var lowIdx = 0, highIdx = array.length - 1;
	while(lowIdx <= highIdx){
		var midIdx = Math.floor((highIdx + lowIdx) / 2);
		if(array[midIdx] == n){
			return midIdx;			
		}else if(n > array[midIdx]){
			lowIdx = midIdx + 1;
		}else{
			highIdx = midIdx - 1;
		}
	}
	return -1;
}
//array = [1,4,7,8,9];
//binary_search(array, 4);
//binary_search(array, 0);

function recursive_binary_search(array, value, start, end){

	//base case
	if(start > end){
		return -1;
	}

	//middle index
	var midIdx = Math.floor((start + end) / 2);

	//compare
	if (array[midIdx] === value){
		return midIdx;
	}
	if(array[midIdx] > value){
		return recursive_binary_search(array, value, start, midIdx - 1);
	}else{
		return recursive_binary_search(array, value, midIdx + 1, end);
	}
}

