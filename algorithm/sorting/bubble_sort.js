function swap(array, idx1, idx2){
	var temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function bubble_sort(array){
	for(var i = 0, arrayLength = array.length; i < arrayLength; i++){
		for(var j = 0; j <= i; j++){
			if(array[i] < array[j]){
				swap(array, i, j);
			}
		}
	}
	return array;
}

var array = [4,7,5,6,1];
bubble_sort(array);