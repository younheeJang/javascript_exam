

//call this.
function quick_sort(array){
	return quick_sort_helper(array, 0, array.length - 1);
}


//get sort left and right
function quick_sort_helper(array, left, right){
	var index;
	if(array.length > 1){
		index = partition(array, left, right);
		if(left < index - 1){
			quick_sort_helper(array, left, index - 1);
		}
		if(index < right){
			quick_sort_helper(array, index, right);
		}
	}
	return array;
}


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

//quick_sort([4,5,8,1,3,9]);
//=> [ 1, 3, 4, 5, 8, 9 ]
