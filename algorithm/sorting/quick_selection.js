//get pivot idx:
function partition(array, left, right){
	//get pivot as medium idx from input array
	var pivot = array[Math.floor((left + right) / 2)];

	//continue while left is smaller or equal than right
	while(left <= right){
		while(pivot > array[left]){
			left++;
		}
		while(pivot < array[right]){
			right--;
		}
		if(left <= right){
			var temp = array[left];
			array[left] = array[right];
			array[right] =temp;
			left++;
			right--;
		}
	}
	return left;
}


var array = [1,3,3,-2,3,14,7,8,1,2,2];
function quick_select(A, S, M, K){
//A -> array, S is start, M is max len, K is for Kth.
	
	//find pivot
	var p = partition(A, S, M);
	
	//if sorted, 
	if(p == (K - 1)){
		return A[p];
	} else if(p > (K - 1)){
		return quick_select(A, S, p - 1, K);
	} else {
		return quick_select(A, p + 1, M, K);
	}
}
//quick_select(array,0,array.length-1,9); // 7

